//lib call
import {folderPath} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.9/croot.js";
//please always use trailing slash(/) for folder or extension for file.
//never use slash in front of file or directory
//u might change croot parameter based on your path

export const backend={
    user:{
        data:"https://https://asia-southeast2-awangga.cloudfunctions.net/pamongdesa/data/user",
        todo:"https://https://asia-southeast2-awangga.cloudfunctions.net/pamongdesa/data/user/task/todo",
        doing:"https://https://asia-southeast2-awangga.cloudfunctions.net/pamongdesa/data/user/task/doing",
        done:"https://https://asia-southeast2-awangga.cloudfunctions.net/pamongdesa/data/user/task/done",
    },
    helpdesk:{
        all:"https://https://asia-southeast2-awangga.cloudfunctions.net/pamongdesa/data/user/helpdesk/all",
        masuk:"https://https://asia-southeast2-awangga.cloudfunctions.net/pamongdesa/data/user/helpdesk/masuk",
        selesai:"https://https://asia-southeast2-awangga.cloudfunctions.net/pamongdesa/data/user/helpdesk/selesai",
    },
    wa:{
        text:"https://api.wa.my.id/api/v2/send/message/text",
        device:"https://api.wa.my.id/api/device/",
    },
    project:{
        data:"https://https://asia-southeast2-awangga.cloudfunctions.net/pamongdesa/data/proyek",
        anggota:"https://https://asia-southeast2-awangga.cloudfunctions.net/pamongdesa/data/proyek/anggota",
    },
    sender:{
        data:"https://https://asia-southeast2-awangga.cloudfunctions.net/pamongdesa/data/sender",
        blokir:"https://https://asia-southeast2-awangga.cloudfunctions.net/pamongdesa/data/blokir",
        rekap:"https://https://asia-southeast2-awangga.cloudfunctions.net/pamongdesa/data/rekap",
    },
    ux:{
        feedback:"https://https://asia-southeast2-awangga.cloudfunctions.net/pamongdesa/notif/ux/postfeedback",
        laporan:"https://https://asia-southeast2-awangga.cloudfunctions.net/pamongdesa/notif/ux/postlaporan",
        rating:"https://https://asia-southeast2-awangga.cloudfunctions.net/pamongdesa/notif/ux/rating",
        meeting:"https://https://asia-southeast2-awangga.cloudfunctions.net/pamongdesa/notif/ux/postmeeting",
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