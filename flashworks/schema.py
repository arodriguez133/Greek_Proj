import graphene
from graphene_django.types import DjangoObjectType
from Greek_Proj.models import Flash
from Greek_Proj.mutations import Mutation as GreekProjMutations

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

class Mutation(GreekProjMutations, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)
