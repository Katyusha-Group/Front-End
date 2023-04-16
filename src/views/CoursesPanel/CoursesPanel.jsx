import React from "react";
import ReactDOM from 'react-dom';
//import routes from "../route.jsx";
import {Link} from "react-router-dom";
//import { useInfo } from "../contexts/InfoContext.jsx";
// import styles from "../assets/css/CoursesPanel.css";
import {
  Button,
  Row,
  Col,
  Input,
} from "reactstrap";
import * as XLSX from 'xlsx';


function upload() {
  //alert("Upload clicked");
  var files = document.getElementById('file_upload').files;

  if(files.length==0){
    alert("Please choose any file...");
    return;
  }
  var filename = files[0].name;
  var extension = filename.substring(filename.lastIndexOf(".")).toUpperCase();
  if (extension == '.XLS' || extension == '.XLSX') {
      excelFileToJSON(files[0]);
  }else{
      alert("Please select a valid excel file.");
  }
}
function excelFileToJSON(file){
  try {
    var reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function(e) {

        var data = e.target.result;
        var workbook = XLSX.read(data, {
            type : 'binary'
        });
        var result = {};
        workbook.SheetNames.forEach(function(sheetName) {
            var roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
            if (roa.length > 0) {
                result[sheetName] = roa;
            }
        });
        //displaying the json result
        var resultEle=document.getElementById("json-result");
        resultEle.value=JSON.stringify(result, null, 4);
        resultEle.style.display='block';
        }
    }catch(e){
        console.error(e);
    }
}
function CoursesPanel() {
  return (
    <>

    {/* <div className="div-1">
    
    <span >
      <div className="div-2">
      </div>
      <div className="div-3">
        
      </div>
      <br/>
      <Row className="CoursesPanelRow">
        <Col>
          
        </Col>
        <Col>
        
        </Col>
      </Row>
    </span>
    </div>
    <span>
      
    </span>
    <Button>Hello</Button> */}
    <h1>Upload an excel file to convert into JSON</h1>
    {/* <input type="file" id="file_upload" /> */}
    <Input type='file' id="file_upload"></Input>
    <Button onclick={upload()}>Upload</Button>  
    <br></br>
    <textarea id="json-result" style={{display:'none', height:'500px', width:'350px'}}></textarea>
    </>
  );
}
export default CoursesPanel;


