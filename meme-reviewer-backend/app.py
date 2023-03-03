import os
from flask import Flask, jsonify, request, Response
from flask_cors import CORS
import uuid
import base64

memes = [
    { "name": "Change my mind", "data": "https://img-9gag-fun.9cache.com/photo/aeMe6WW_700bwp.webp", "year": "2018" },
    { "name": "Success Kid", "data": "https://i.pinimg.com/736x/91/92/07/91920700c1d95a3348382cf60b27673a.jpg", "year": "2016" },
    { "name": "Shut up and take my money", "data": "https://i.kym-cdn.com/entries/icons/original/000/005/574/takemymoney.jpg", "year": "2016" },
    { "name": "That Escalated Quickly", "data": "https://cdn.vox-cdn.com/thumbor/CKkF4aPYdSRsv9EiaQFs_PnlArs=/0x0:500x577/1200x0/filters:focal(0x0:500x577):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/6367395/f17.jpg", "year": "2004" },
    { "name": "Disaster girl", "data": "https://www.thesun.co.uk/wp-content/uploads/2016/07/nintchdbpict000252984341.jpg", "year": "2004" },
    { "name": "Exit 12", "data": "https://i.kym-cdn.com/photos/images/newsfeed/001/329/047/9a2.png", "year": "2004" },
    { "name": "Distracted boyfriend", "data": "https://i.kym-cdn.com/photos/images/newsfeed/001/287/547/e06.jpg", "year": "2015" },
    { "name": "Doge", "data": "https://thejesuitpost.org/wp-content/uploads/2014/05/Doge-natius.jpg", "year": "2010" },
    { "name": "First World Problems", "data": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQSsVaN4blxQNCuT-ZBCYRSnvYRfkprQj3g&usqp=CAU", "year": "1995" }
]

app = Flask(__name__)
environment = os.getenv('APP_ENVIRONMENT')

CORS(app)

@app.route('/health')
def health():
    return 'Meme reviewer is running!'

@app.route('/api/meme')
def get_meme():
    return jsonify(memes)

@app.route('/api/meme', methods=['POST'])
def post_meme():
    file = request.files['image']
    ext = file.filename.split(".")[-1]
    # filename = f'./images/{uuid.uuid4()}.{file.filename.split(".")[-1]}'
    # file.save(filename)

    rv = base64.b64encode(file.read())
    rv = rv.decode('ascii')
        
    memes.append({ 
        'name': request.form['name'],
        'data': f'data:image/{ext};base64,{rv}',
        'year': request.form['year']
    })
    
    return Response("", status=201)