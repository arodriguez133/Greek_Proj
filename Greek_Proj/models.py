from django.db import models

class Flash(models.Model):
    dbSequence = models.AutoField(primary_key=True)
    dbChapter = models.IntegerField()
    dbGK = models.IntegerField()
    dbDifficulty = models.IntegerField()
    dbFrequency = models.IntegerField()
    dbType = models.CharField(max_length=1)
    dbSetDiffWordAuto = models.IntegerField()
    dbCounter = models.IntegerField()
    dbWord = models.CharField(max_length=128)
    dbSayWordFile = models.CharField(max_length=128)
    dbMeaning = models.CharField(max_length=128)
    dbPrincipalParts = models.CharField(max_length=128)

    class Meta:
        db_table = 'flash'
