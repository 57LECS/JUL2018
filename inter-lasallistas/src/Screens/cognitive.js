import React from 'react';
import { Container, Row, Col, Progress, Form, FormGroup, Label, Input, FormText, CardImg } from 'reactstrap';

class Cognitive extends React.Component {

    render() {
        return (
            <Container style={{height: '720px'}} >
                <Row>
                    <Col>
                        <h3 className="text-center">Cognitive Services Emotion API </h3>
                        <h3 className="text-center"><i className="far fa-smile-wink"></i></h3>
                    </Col>
                </Row>
                <br/>
                <Progress value={75} />
                <div className="text-center">77%</div>
                <br/>
                <Row >
                    <Col xs="6">
                        <Form>
                            <FormGroup>
                                <Label for="exampleFile">Seleccione la imagen: </Label>
                                <Input type="file" name="file" id="exampleFile" />
                                <FormText color="muted">
                                    Debe seleccionar una imagen. Formatos permitidos => .jpg .png
                                </FormText>
                            </FormGroup>
                        </Form>
                        <CardImg top width="100%" src="http://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/faceplus-example.png" alt="Card image cap" />
                    </Col>
                    <Col xs="6">
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Alegria</Label>
                                <Input type="text" name="email" id="exampleEmail" placeholder="- - - - - -" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Tristeza</Label>
                                <Input type="text" name="email" id="exampleEmail" placeholder="- - - - - -" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Neutral</Label>
                                <Input type="text" name="email" id="exampleEmail" placeholder="- - - - - -" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Disgusto</Label>
                                <Input type="text" name="email" id="exampleEmail" placeholder="- - - - - -" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Enojado</Label>
                                <Input type="text" name="email" id="exampleEmail" placeholder="- - - - - -" />
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default Cognitive;

// fetch para react
// $.ajax({
//     // NOTE: You must use the same location in your REST call as you used to obtain your subscription keys.
//     //   For example, if you obtained your subscription keys from westcentralus, replace "westus" in the
//     //   URL below with "westcentralus".
//     url: "https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?" + $.param(params),
//     beforeSend: function(xhrObj){
//         // Request headers, also supports "application/octet-stream"
//         xhrObj.setRequestHeader("Content-Type","application/json");

//         // NOTE: Replace the "Ocp-Apim-Subscription-Key" value with a valid subscription key.
//         xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","<your subscription key>");
//     },
//     type: "POST",
//     // Request body
//     data: '{"url": "<your image url>"}',
// }).done(function(data) {
//     // Get face rectangle dimensions
//     var faceRectangle = data[0].faceRectangle;
//     var faceRectangleList = $('#faceRectangle');

//     // Append to DOM
//     for (var prop in faceRectangle) {
//         faceRectangleList.append("<li> " + prop + ": " + faceRectangle[prop] + "</li>");
//     }

//     // Get emotion confidence scores
//     var scores = data[0].scores;
//     var scoresList = $('#scores');

//     // Append to DOM
//     for(var prop in scores) {
//         scoresList.append("<li> " + prop + ": " + scores[prop] + "</li>")
//     }
// }).fail(function(err) {
//     alert("Error: " + JSON.stringify(err));
// });

// class Cognitive extends React.Component {
//     state = {
//       posts: []
//     }

//     componentDidMount() {
//       axios.get(`https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?`)
//         .then(res => {
//           const posts = res.data.data.children.map(obj => obj.data);
//           this.setState({ posts });
//         });
//     }

//     render() {
//       return (
//         <div>
//           <h1>{`/r/${this.props.subreddit}`}</h1>
//           <ul>
//             {this.state.posts.map(post =>
//               <li key={post.id}>{post.title}</li>
//             )}
//           </ul>
//         </div>
//       );
//     }
//   }

//   ReactDOM.render(
//     <FetchDemo subreddit="reactjs"/>,
//     document.getElementById('root')
//   );