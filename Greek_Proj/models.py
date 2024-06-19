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

class QueryLog(models.Model):
    query = models.TextField()
    operation_name = models.CharField(max_length=255, null=True, blank=True)
    start_time = models.DateTimeField()
    end_time= models.DateTimeField()
    execution_time = models.FloatField()
