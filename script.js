//your JS code here. If required.
const select = document.getElementById('colorSelect');
        const button = document.getElementsByTagName('input')[0];
        // console.log(button);
        button.addEventListener(('click'), deleteCurrentOption);

        function deleteCurrentOption(){
            let currentOptValue = select.value;
            for (let i = 0; i < select.options.length; i++) {
                const option = select.options[i];
                if(option.value === currentOptValue){
                    option.remove();
                }
                
            }
            console.log(select.value);
            console.log(select.options[0].value)
        }