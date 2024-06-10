import graphene 
from graphene_django.types import DjangoObjectType
from Greek_Proj.models import Flash
from graphene import Field, ID


class FlashType(DjangoObjectType):
    class Meta: 
        model = Flash
        fields = "__all__"

class Query(graphene.ObjectType):
    all_flashes = graphene.List(FlashType)
    flash = graphene.Field(FlashType, flash_id=graphene.Int())

    def resolve_all_flashes(self, info, **kwargs):
        return Flash.objects.all()
    
    def resolve_flash(self, info, flash_id):
        return Flash.objects.get(pk=flash_id)
    
class FlashInput(graphene.InputObjectType):
    dbChapter = graphene.Int(required=False)
    dbGK = graphene.Int(required=False)
    dbDifficulty = graphene.Int(required=False)
    dbFrequency = graphene.Int(required=False)
    dbType = graphene.String(required=False)
    dbSetDiffWordAuto = graphene.Int(required=False)
    dbCounter = graphene.Int(required=False)
    dbWord = graphene.String(required=False)
    dbSayWordFile = graphene.String(required=False)
    dbMeaning = graphene.String(required=False)
    dbPrincipalParts = graphene.String(required=False)

class CreateFlash(graphene.Mutation):
    class Arguments:
        flash_data = FlashInput(required=True)

    flash = graphene.Field(FlashType)

    @staticmethod
    def mutate(root, info, flash_data=None):
        flash_instance = Flash(
            dbChapter = flash_data.dbChapter,
            dbGK = flash_data.dbGK,
            dbDifficulty = flash_data.dbDifficulty,
            dbFrequency = flash_data.dbFrequency,
            dbType = flash_data.dbType,
            dbSetDiffWordAuto = flash_data.dbSetDiffWordAuto,
            dbCounter = flash_data.dbCounter,
            dbWord = flash_data.dbWord ,
            dbSayWordFile = flash_data.dbSayWordFile,
            dbPrincipalParts = flash_data.dbPrincipalParts,
        )

        flash_instance.save()
        return CreateFlash(flash=flash_instance)
    
class UpdateFlash(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        flash_data = FlashInput(required=True)

    flash = graphene.Field(FlashType)

    @staticmethod
    def mutate(root, info, id, flash_data=None):

        flash_instance = Flash.objects.get(pk=id)

        if flash_instance:
            flash_instance.dbChapter = flash_data.dbChapter
            flash_instance.dbGK = flash_data.dbGK
            flash_instance.dbDifficulty = flash_data.dbDifficulty
            flash_instance.dbFrequency = flash_data.dbFrequency
            flash_instance.dbType = flash_data.dbType
            flash_instance.dbSetDiffWordAuto = flash_data.dbSetDiffWordAuto
            flash_instance.dbCounter = flash_data.dbCounter
            flash_instance.dbWord = flash_data.dbWord
            flash_instance.dbSayWordFile = flash_data.dbSayWordFile 
            flash_instance.dbPrincipalParts = flash_data.dbPrincipalParts
            flash_instance.save()

            return UpdateFlash(flash=flash_instance)
        return UpdateFlash(flash=None)
    
class DeleteFlash(graphene.Mutation):
    class Arguments:
        id = graphene.ID()

    success = graphene.Boolean()
    flash = graphene.Field(FlashType)

    @staticmethod
    def mutate(root, info, id):
        flash_instance = Flash.objects.get(pk=id)
        flash_instance.delete()

        return DeleteFlash(flash=flash_instance)

class Mutation(graphene.ObjectType):
    create_flash = CreateFlash.Field()
    update_flash = UpdateFlash.Field()
    delete_flash = DeleteFlash.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)
