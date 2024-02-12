// import React, { useState } from "react";
// import { imgDB, db } from "./firebase";
// import { v4 } from "uuid";
// import { set } from "firebase/database";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// const Demo = () => {
//   const [txt, setTxt] = useState("");
//   //   const [img, setImg] = useState("");

//   const handleUpload = (e) => {
//     const imgs = ref(imgDB, `Imgs${v4()}`);
//     console.log(imgs);
//     uploadBytes(imgs, e.target.files[0]).then((data) => {
//       getDownloadURL(data.ref).then((val) => {
//         console.log(val);
//       });
//     });
//   };
//   const writeToDataBase = () => {
//     const uuid = v4();
//     set(ref(db, `/${uuid}`), {
//       txt,
//       uuid,
//     });
//     setTxt("");
//   };

//   return (
//     <div>
//       <input type="text" onChange={(e) => setTxt(e.target.value)} />
//       <input type="file" onChange={(e) => handleUpload(e)} />
//       <button onClick={writeToDataBase}>Click</button>
//       <p className="">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
//         amet.
//       </p>
//     </div>
//   );
// };

// export default Demo;
