let weadet = [];
function T_logic(){
    const D_desc = ['rain','snow']
    let getTClass=[];

    for(let j=0;j<3;j++) {
        let i = 0;
        // weadet[j][1] == 온도
        if (weadet[j][1] < 10) {
            for (; i < D_desc.length; i++) {
                // weadet[j][0] == 날씨
                if (weadet[j][0].indexOf(D_desc[i]) !== -1) {
                    break;
                }
            }
            getTClass.push("A");
            bw.push(!(i === D_desc.length));
        }
        else if (weadet[j][1] < 24) {
            for (; i < D_desc.length; i++) {
                if (weadet[j][0].indexOf(D_desc[i]) !== -1) {
                    break;
                }
            }
            getTClass.push("B");
            bw.push(!(i === D_desc.length));
        }
        else if (weadet[j][1] < 28){
            for (; i < D_desc.length; i++) {
                if (weadet[j][0].indexOf(D_desc[i]) !== -1) {
                    break;
                }
            }
            getTClass.push("C");
            bw.push(!(i === D_desc.length));
        }
        else {
            for (; i < D_desc.length; i++) {
                if (weadet[j][0].indexOf(D_desc[i]) !== -1) {
                    break;
                }
            }
            getTClass.push("D");
            bw.push(!(i === D_desc.length));
        }
    }
    day_temp = getTClass;
}
//[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}]