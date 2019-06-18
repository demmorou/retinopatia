from django.shortcuts import render, redirect
from django.core.files.storage import FileSystemStorage
import os
from diagnostico import pred


def analisar(request):
    if request.method == 'POST':
        if 'imagem_retina' in request.FILES:
            myfile = request.FILES['imagem_retina']
            fs = FileSystemStorage()
            filename = fs.save(myfile.name, myfile)
            print(filename)
            path = 'media/'+filename
            size = os.path.getsize(path)
            predic = pred.prediction_one(path)
            print(predic)
            size = size / (1024 * 1024.0)
            size_ = str(size)
            diagnostico_ = ''
            if predic == 1:
                diagnostico_ = 'NÃO HÁ EXSUDATOS'
            else:
                diagnostico_ = 'HÁ EXSUDATOS'
            print(path)
            return render(request, 'usuario/index.html', {'imagem': 1, 'resultado': predic, 'diagnostico': diagnostico_, 'url_imagem': path, 'image_name': myfile, 'size': size_[:5]})
        else:
            return render(request, 'usuario/index.html', {'imagem': 1, 'resultado': 2, 'diagnostico': ''})
    elif request.method == 'GET':
        return render(request, 'usuario/index.html', {'imagem': 1, 'resultado': 2, 'diagnostico': ''})
    else:
        return render(request, 'usuario/index.html', {'imagem': 1, 'resultado': 2, 'diagnostico': ''})


def index(request):
    return render(request, 'usuario/index.html', {'imagem': 1, 'resultado': 2, 'diagnostico': ''})