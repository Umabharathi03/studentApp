
import { db } from '../initialize.js';


import{getDocs,collection,updateDoc} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";

window.onload = loadData;

function loadData()
{
    console.log("Inside loadData");
    setInterval(loadDataFromDB, 2000);
   
}
async function loadDataFromDB()
{
  
  let querySnapshot = await getDocs(collection(db, "students"));
  let myArray = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, " => ", doc.data());
   myArray.push(doc.data());

  });
 
  //console.log(myArray);
 addAllItemsToTable(myArray);
 
}

function addAllItemsToTable(myArrayDocList)
{
    let stdNo=0;
    let tblBody =document.getElementById('tbBody');
    tblBody.innerHTML="";

    myArrayDocList.forEach(element =>{
    addRowToTable(++stdNo,element.stuName,element.stuRollNo,
                    element.stuSection,element.stuClass,element.stuGender);
});
}




function addRowToTable(slNo,name,rollNo,sec,cls,gen)
{

  let tblBody =document.getElementById('tbBody');
   let trow=document.createElement('tr');

   let col1Data =document.createElement('td');
   let col2Data=document.createElement('td');
   let col3Data=document.createElement('td');
   let col4Data=document.createElement('td');
   let col5Data=document.createElement('td');
   let col6Data =document.createElement('td');

   col1Data.innerHTML=slNo;
   col2Data.innerHTML=name;
   col3Data.innerHTML=rollNo;
   col4Data.innerHTML=sec;
   col5Data .innerHTML=cls;
   col6Data .innerHTML=gen;


    trow.appendChild(col1Data);
    trow.appendChild(col2Data);
    trow.appendChild(col3Data);
    trow.appendChild(col4Data);
    trow.appendChild(col5Data);
    trow.appendChild(col6Data);

    tblBody.appendChild(trow);
}
  

