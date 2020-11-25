from django import forms
from .models import ProImage

class ImageForm(forms.ModelForm):
    class Meta:
        model=ProImage
        exclude = ("uploader",)
        # fields=("image")