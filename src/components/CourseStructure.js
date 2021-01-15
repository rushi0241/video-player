import React, { useState, useEffect } from 'react'

function Course(props) {
    const courseName = props.match.params.coursename;
    const [courses, setCourses] = useState([])
    const [vid, uid] = useState("")
    const [title, utitle] = useState("")
    const [linkActive, uLinkActive] = useState(0)
    useEffect(()=>{
        let playListId = ""
        if(courseName == "reactjs") {
            playListId = "PLB97yPrFwo5j60AxzdZVC3dOJvJy4Oxkp"
        }else{
            playListId = "PL8p2I9GklV44X970xDCQvts19-0XQWMeA"
        }
        fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=10&playlistId=${playListId}&key=AIzaSyCO2toLWs9gg-i2TmK5Qxw99QrAO7cuAuk`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            const result = data.items.map(item=>{
                return {title: item.snippet.title, vid: item.contentDetails.videoId }                
            })
            setCourses(result)
            uid(result[0].vid)
            utitle(result[0].title)
        })
    },[])
    const renderVideo = ()=>{
        return (
            <>
                <h3>{title}</h3>
                <div className="video-container">
                    <iframe width="853" height="480" src={"//www.youtube.com/embed/"+vid+"?rel=0"} frameBorder="0" allowFullScreen></iframe>
                </div>
            </>
        )
    }
    return (
        <>
            {courses.length > 0 ?
                <div>
                    <h1>{courseName}</h1>
                    <div className="courses-container">
                        {renderVideo()}
                        <div className="collection">
                            {
                                courses.map((item,i) =>{
                                    return <a key={i} className={linkActive == i ? "collection-item active" : "collection-item"} onClick={()=>{
                                        uid(item.vid)
                                        utitle(item.title)
                                        uLinkActive(i)
                                    }}>{item.title}</a>
                                })
                            }
                        </div>
                    </div>
                </div>
                :
                <h1>Loading...</h1>
            }
        </>
    );
}

export default Course;
