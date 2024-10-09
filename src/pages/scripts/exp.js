import React from 'react';
import 'react-bootstrap'
import { useState } from 'react';
import { Document, Page ,pdfjs} from 'react-pdf';
import { Button, Container, Nav } from 'react-bootstrap';
import  {Link} from 'react-scroll';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Exp =() =>{
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    return(
        <div id="exp" >
           <Container>  
            <h3>Experimental Plan:</h3>
            <div>
            <p>There are available architectural models and implementations for autoencoders, we will be coding modificagtions on 
                top of that for suiting our requirements. 
                For initial tests, datasets of pycoco will be used. And for further tests after implementations, motion datasets 
                of waymo, kitti and maybe even some footages we make.
                The computations for trajectory projections and prediction actions, we will program using computational tools,
                like numpy and scipy.</p>
            </div>
           
            </Container> 
        </div>
    );
}

export default Exp;