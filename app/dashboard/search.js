"use client";

import React, { useEffect, useRef } from "react";

export default function Search(){
    const searchForm = useRef(null);

    useEffect(()=>{
        searchForm.current.addEventListener("onKeyPress", keyPress);
    },[])

    const keyPress=(event)=>{
        if(event.key==="enter"){
            searchForm.submit();
        }
    }

    const handleSubmit=(e)=>{
    }

    return(
        <div className="">
            <form ref={searchForm} onSubmit={handleSubmit}>
                <input id="searchInput" name="search" placeholder="Search for cities"/>
            </form>
        </div>
    )
        }