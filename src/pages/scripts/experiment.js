import React from 'react';
import 'react-bootstrap'
import { useState } from 'react';
import { Document, Page ,pdfjs} from 'react-pdf';
import { Button, Container, Nav } from 'react-bootstrap';
import  {Link} from 'react-scroll';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Experiment =() =>{
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    return(
        <div id="experiment" >
           <Container>  
            <h3>Experimental Setup:</h3>
            <div><p>For initial tests and for priliminary training, we required an easy to use dataset, which we found in this basketball dataset from
            kaggle (https://www.kaggle.com/api/v1/datasets/download/trainingdatapro/basketball-tracking-dataset?dataset_version_number=3).</p>
            <p>
            In this, we had image data that had translation that we desired and camera movement. Our model trained on this and we
            kept refining upon results. Resulting outputs we got from it were satisfactory. The image is given below: bb.png
            </p>
            <p>
            We compared our (m+n+1)th image with the predicted image and the prediction from the model was more than satisfactory.
            The model was predicting camera movements and even jumps from the players nearing the hoop.
            </p>
            </div>
           
            </Container> 
        </div>
    );
}

export default Experiment;