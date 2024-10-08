//lib call
import {folderPath} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.9/croot.js";
//please always use trailing slash(/) for folder or extension for file.
//never use slash in front of file or directory
//u might change croot parameter based on your path

export const backend={
    user:{
        data:"https://msg.ulbi.ac.id/data/user",
        todo:"https://msg.ulbi.ac.id/data/user/task/todo",
        doing:"https://msg.ulbi.ac.id/data/user/task/doing",
        done:"https://msg.ulbi.ac.id/data/user/task/done",
    },
    helpdesk:{
        all:"https://msg.ulbi.ac.id/data/user/helpdesk/all",
        masuk:"https://msg.ulbi.ac.id/data/user/helpdesk/masuk",
        selesai:"https://msg.ulbi.ac.id/data/user/helpdesk/selesai",
    },
    wa:{
        text:"https://wa.ulbi.ac.id/v2/send/message/text",
        device:"https://wa.ulbi.ac.id/device/",
    },
    project:{
        data:"https://msg.ulbi.ac.id/data/proyek",
        anggota:"https://msg.ulbi.ac.id/data/proyek/anggota",
    },
    sender:{
        data:"https://msg.ulbi.ac.id/data/sender",
        blokir:"https://msg.ulbi.ac.id/data/blokir",
        rekap:"https://msg.ulbi.ac.id/data/rekap",
    },
    ux:{
        feedback:"https://msg.ulbi.ac.id/notif/ux/postfeedback",
        laporan:"https://msg.ulbi.ac.id/notif/ux/postlaporan",
        rating:"https://msg.ulbi.ac.id/notif/ux/rating",
        meeting:"https://msg.ulbi.ac.id/notif/ux/postmeeting",
    }
}

export const croot = folderPath()+"jscroot/";

export const folder={
    template:croot+"template/",
    controller : croot+"controller/",
    view : croot+"view/",
}

export const url={
    template:{
        content : folder.template+"content/",
        header: folder.template+"header.html",
        navbar:folder.template+"navbar.html" ,
        settings:folder.template+"settings.html" ,
        sidebar:folder.template+"sidebar.html" ,
        footer:folder.template+"footer.html", 
        rightbar:folder.template+"rightbar.html"
    },
    controller:{
        main : folder.controller+"main.js",
        navbar : folder.controller+"navbar.js"
    },
    view : {
        content:folder.view+"content/",
        header: folder.view+"header.js",
        search:folder.view+"search.js" ,
        settings:folder.view+"settings.js" ,
        navbar:folder.view+"navbar.js" ,
        footer:folder.view+"footer.js" 
    }
}

export const id={
    header:"header__container",
    navbar:"navbar",
    content:"content"
}