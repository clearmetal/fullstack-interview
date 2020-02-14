from flask import Flask, request, jsonify
import uuid

app = Flask(__name__)


def make_comment_id():
    return uuid.uuid4().hex


COMMENTS = [
    dict(id=make_comment_id(), content='I am a comment'),
    dict(id=make_comment_id(), content='I am a comment too'),
    dict(id=make_comment_id(), content='Me too'),
]


@app.route('/comments', methods=['GET', 'POST', 'PUT', 'DELETE'])
def comments_api():
    data = request.get_json()

    if request.method == 'GET':
        return jsonify(COMMENTS)
    elif request.method == 'POST':
        pass
    elif request.method == 'PUT':
        pass
    elif request.method == 'DELETE':
        pass

    return 'ok'


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True, threaded=True)
