({
    scriptsLoaded : function(cmp, evt, helper) {
        console.log('Scripts loaded...');
    },
    
    capture: function(cmp, evt, helper){
        const capture = document.querySelector('#capture');//cmp.find('capture')
        console.log('Screenshot of this element: ', JSON.stringify(capture))
        html2canvas(capture).then(function(canvas){
            console.log(JSON.stringify(canvas))
            document.body.appendChild(canvas)
        }).catch(error=>console.error(JSON.stringify(error)));
    }
})