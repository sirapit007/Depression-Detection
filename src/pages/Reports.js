import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

function Reports() {
  const [value, setValue] = useState("");

  const handleClick = () => {
    if(value !== ""){
      async function query(data) {
        const response = await fetch(
          "https://api-inference.huggingface.co/models/Kittipot/Wangchanberta-Depress-Finetuned",
          {
            headers: { Authorization: "Bearer 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" },
            method: "POST",
            body: JSON.stringify(data),
          }
        );
        const result = await response.json();
        return result;
      }
      
      query({"inputs": value}).then((response) => {
        const result = [];
        console.log(JSON.stringify(response[0]));
        const list = (JSON.stringify(response[0])).slice((-(JSON.stringify(response[0])).length+2),-2);
        var array = list.split('},{');
        //console.log(array);
        var string = array.toString();
        //console.log(string);
        var array2 = string.split('"label":"');
        //console.log(array2);
        var string2 = array2.toString();
        //console.log(string2);
        var array3 = string2.split('},{');
        //console.log(array3);
        var string3 = array3.toString();
        //console.log(string3);
        var array4 = string3.split('","score":');
        //console.log(array4);
        var string4 = array4.toString();
        //console.log(string4);
        var array5 = string4.split(',');
        //console.log(array5);
        var k = 0;
        for (var j of array5) {
          if (k%3 === 1) result.push(j);
          else if (k%3 === 2) result.push(parseFloat(j))
          else console.log(j);
          k++;
        }
        console.log(result);
        const text1 = result[0] + ' : ' + Math.round(result[1]*100) + ' %'; 
        const text2 = result[2] + ' : ' + Math.round(result[3]*100) + ' %'; 
        const text3 = result[4] + ' : ' + Math.round(result[5]*100) + ' %';
        document.getElementsByClassName("sentiment-text1")[0].innerText = text1;
        document.getElementsByClassName("sentiment-text2")[0].innerText = text2;
        document.getElementsByClassName("sentiment-text3")[0].innerText = text3;
      });
    } else {
      document.getElementsByClassName("sentiment-text1")[0].innerText = "";
      document.getElementsByClassName("sentiment-text2")[0].innerText = "";
      document.getElementsByClassName("sentiment-text3")[0].innerText = "";
    }
  }

  const handleValueChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div style={{height:"90vh", width:"100vw", alignItems:"center", justifyContent:"center", textAlign:"center",
    backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", display:"table-cell", verticalAlign: "middle", horizontalAlign:"middle"}}>
      <Input transparent onChange={handleValueChange} action={{color: 'teal', onClick: () => handleClick(), content: "ประมวลผล"}}
      placeholder='ใส่ข้อความ...' style={{border:"1px solid #fff", padding:"10px", borderRadius: "9px", color: "white", width: "65%"}} />
      <p className="sentiment-text1" style={{marginTop: "20px", color: "white", fontSize: "15px"}} />
      <p className="sentiment-text2" style={{marginTop: "20px", color: "white", fontSize: "15px"}} />
      <p className="sentiment-text3" style={{marginTop: "20px", color: "white", fontSize: "15px"}} />
    </div>
  );
}

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default Reports;

