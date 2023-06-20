from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.
class Categoria(models.Model):
    idCategoria = models.IntegerField(primary_key=True, verbose_name="Id de Categoria")
    nombreCategoria = models.CharField(max_length=50, blank=True, verbose_name="Nombre de Categoria")

    def __str__(self):
        return self.nombreCategoria #permite acceder a los objetos a través de su nombre en el admin
    
    
class Producto(models.Model):
    sku =  models.CharField(primary_key=True, max_length=10, verbose_name="SKU")
    nombre = models.CharField(max_length=20, blank=True, verbose_name="Nombre")
    descrip = models.CharField(max_length=50, blank=True, verbose_name="Descripcion")
    imagen = models.ImageField(upload_to="imagenes", null=True, blank=True, verbose_name="Imagen")
    precio = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(99999)], blank=True, verbose_name="Precio")
    stock = models.IntegerField(default=0, blank=True, verbose_name="Stock")
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE, verbose_name="Categoria")

    def __str__(self):
        return self.sku