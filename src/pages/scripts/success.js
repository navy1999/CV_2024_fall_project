import React from 'react';
import 'react-bootstrap'
import { useState } from 'react';
import { Document, Page ,pdfjs} from 'react-pdf';
import { Button, Container, Nav } from 'react-bootstrap';
import  {Link} from 'react-scroll';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Success =() =>{
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    return(
        <div id="success" >
           <Container>  
            <h3>Success Definition:</h3>
            <div><p>We plan to test our implementation by running our architecture on some arbritary initial part of a footage and 
            comparing our predictions with the actual remaining footage.</p></div>
           
            </Container> 
        </div>
    );
}

export default Success;