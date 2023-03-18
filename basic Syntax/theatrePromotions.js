function theatrePromotions(typeOfDay, age) {
    let price = 0;
    if (age < 0 || age > 122) {
        console.log('Error!');
    }else{
    switch (typeOfDay) {
        case 'Weekday':
            if (0 <= age && age <= 18) {
                price = 12;
            }else if(18 < age && age <= 64){
                price = 18;
            }else if(64 < age && age <= 122){
                price = 12;
            }
            break;
            case 'Weekend':
                if (0 <= age && age <= 18) {
                    price = 15;
                }else if(18 < age && age <= 64){
                    price = 20;
                }else if(64 < age && age <= 122){
                    price = 15;
                }
            break;
            case 'Holiday':
                if (0 <= age && age <= 18) {
                    price = 5;
                }else if(18 < age && age <= 64){
                    price = 12;
                }else if(64 < age && age <= 122){
                    price = 10;
                }
            break;
            
        
    }
    console.log(`${price}$`);
}
}
theatrePromotions('Weekday',42)