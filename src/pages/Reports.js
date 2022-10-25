import React, {useState} from 'react';
import { Input } from 'semantic-ui-react';
import { PieChart, Pie } from 'recharts';

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
        console.log(JSON.stringify(response));
        document.getElementsByClassName("sentiment-text")[0].innerText = JSON.stringify(response[0])
      });
    }
  }

  const handleValueChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div style={{height:"90vh", width:"100vw", alignItems:"center", justifyContent:"center", textAlign:"center",
    backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", display:"table-cell", verticalAlign: "middle", horizontalAlign:"middle"}}>
      <Input transparent onChange={handleValueChange} action={{color: 'teal', onClick: () => handleClick(), content: "ประมวลผล"}}
      placeholder='ใส่ข้อความ...' style={{border:"1px solid #fff", padding:"10px", borderRadius: "5px"}} />
      <p className="sentiment-text" style={{marginTop: "20px", color: "white"}} />
    </div>
  );
}

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default Reports;

