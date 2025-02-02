
"use client";
import Image from "next/image";
import Script from "next/script";
import { useEffect } from "react";
import '../public/overlays.min.css'
// import '../public/overlays.min.js';
// import { overlays } from "../public/overlays.min.js";

export default function Home() {
  useEffect(() => {
    
      const editor = overlays?.init({
        // Indicate where to init the editor. You can also pass an HTMLElement
        container: '#ovl',
 
        storageManager: false,
        mergeFields:[
          {
            "name": "First Name",
            "value": '{{first_name}}'
          },
          {
            "name": "Last Name",
            "value": "{{last_name}}"
          },
          {
            "name": "User Id",
            "value": "{{user_id}}"
          },
          {
            "name": "User DOB",
            "value": "{{user_dob}}"
          },
          {
            "name": "User City",
            "value": "{{user_city}}"
          },
          {
            "name": "User Phone",
            "value": "{{userPhone}}"
          },
          {
            "name": "User Nick Name",
            "value": "{{user_nick_name}}"
          },
          {
            "name": "User's Father Name",
            "value": "{{user_father_name}}"
          },
          

        ],
        projectId: '59e688a5-e1ec-4ed9-86f0-71e219888f03',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkwMTM2MGY2LTc2ZGItNGRlNC05ZDk1LTU3OTdhMDRhNDI0YSIsInVwZGF0ZWRfYnlfaWQiOm51bGwsImNyZWF0ZWRfYnlfaWQiOm51bGwsIm9yZ19pZCI6bnVsbCwiZGVsZXRlZF9ieV9pZCI6bnVsbCwiZmlyc3ROYW1lIjoiVGVzdDEiLCJsYXN0TmFtZSI6IkphbmdpZCIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG9uZSI6Ijk5MzAxMzQzNDUiLCJvcmdhbml6YXRpb25fbmFtZSI6Im92ZXJsYXlzIiwiY291bnRyeV9pZCI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyNC0wNi0xM1QxNToyNzoxNy43ODFaIiwidXBkYXRlZEF0IjoiMjAyNC0wNi0xM1QxNToyNzoxNy43ODFaIiwiZGVsZXRlZEF0IjpudWxsLCJyb2xlcyI6W3siaWQiOiJlN2ViNmY3MS0yMTI2LTRlNGYtYmI4YS03MDM3OGNjZjI3OGYiLCJuYW1lIjoiQ1VTVE9NRVIiLCJkZXNjcmlwdGlvbiI6bnVsbCwiUGVybWlzc2lvbiI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyNC0wNS0yMlQwODo1NjozNC44MjVaIiwidXBkYXRlZEF0IjoiMjAyNC0wNS0yMlQwODo1NjozNC44MjVaIiwiZGVsZXRlZEF0IjpudWxsLCJVc2VyUm9sZSI6eyJpZCI6IjU5ZmVkMTQzLThlNDctNGNiNC1hMjIyLTExZWE3MGVmYWVmZiIsInJvbGVfaWQiOiJlN2ViNmY3MS0yMTI2LTRlNGYtYmI4YS03MDM3OGNjZjI3OGYiLCJ1c2VyX2lkIjoiOTAxMzYwZjYtNzZkYi00ZGU0LTlkOTUtNTc5N2EwNGE0MjRhIiwiY3JlYXRlZEF0IjoiMjAyNC0wNi0xM1QxNToyNzoxNy44MTFaIiwidXBkYXRlZEF0IjoiMjAyNC0wNi0xM1QxNToyNzoxNy44MTFaIiwiZGVsZXRlZEF0IjpudWxsfX1dLCJjb3VudHJ5IjpudWxsLCJwcm9qZWN0cyI6W10sImlhdCI6MTcxODI5MjQzN30.1IWJNojPJfL0LsSIYSGWN03sf79EYRvmjwDCXGqOBr0',
       canvasCss:`[data-gjs-type="Column"]:empty:before {
        background-color: #ddd;
        color: #000;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 50px;
        opacity: 0.3;
        border-radius: 3px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        content: "Drop your contentsss";
        padding: 15px;
        margin: 10px;
        text-wrap: wrap;
        text-align: center;
      }
      .col img{
        max-width:100%;
      }`
      });
    
    

    
   
      
      
  }, [])
  return (
    <>
    <Script
      src="overlays.min.js"
      strategy="beforeInteractive"
    />
    <div id="ovl" style={{height:"100%"}}></div>
  </>
  );
}
