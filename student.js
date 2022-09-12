
import { db } from './initialize.js';
import{ collection,getDocs,setDoc ,doc,addDoc,getDoc} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
window.onload = init;
function  init()
{
      const formElem = document.getElementById('form1');
      formElem.addEventListener('submit', saveDataOnSubmit);

 }
 


function saveDataOnSubmit (event)
{
  event.preventDefault();
 let sname=document.getElementById("sname").value;

 let rollno=document.getElementById("rolno").value;
 let sec=document.getElementById("sec").value;
 
 let clss=document.getElementById("cls").value;
 let gen=document.getElementById("gen").value; 
 //console.log("saveDataOnSubmit"+sname);
 saveDataToDB ( sname,rollno,sec,clss,gen);
 

   /*
  alert ("saveDataOnSubmit");
  */
 
}

async function saveDataToDB(stName,rollNo,stuSec,stuClass,stuGen) 
{


  const stuRef=doc(db,"students",rollNo);
   setDoc(stuRef,{
      stuName:stName,
      stuRollNo:rollNo,
      stuSection:stuSec,
      stuClass:stuClass,
      stuGender:stuGen});
    /*  
       console.log("Inside savedata");
       alert("Inside save data ");
      

       const studRef  = collection ( db,"students");
       const obj = {
        stuName:stName,
        stuRollNo:rollNo,
        stuSection:stuSec,
        stuClass:stuClass,
        stuGender:stuGen};
      // Add a new document with a generated id.
      const docRef =  addDoc(studRef,obj);
      console.log("Document written with ID: "+ docRef.id);
     

      const getRef = doc(db, "students", "student7");
      console.log("display");
      const docSnap = await getDoc(getRef);
      
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

      */
  
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
      //console.log(querySnapshot);
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

/*
 async function getData()
 {
  
    console.log("Inside getData");
      const getRef = doc(db, "students",rollNo);
      console.log("display");
      const docSnap = await getDoc(getRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
}
*/
