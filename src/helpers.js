export function calcularTotal(cantidad, plazo){
    const cantidadInt = parseInt(cantidad);
    const plazoInt = parseInt(plazo);

    let totalCantidad;
    if (cantidadInt <= 1000) {
        totalCantidad = cantidadInt * 0.25;
    } else if (cantidadInt > 1000 && cantidadInt <= 5000) {
        totalCantidad = cantidadInt * 0.20;
    }else if (cantidadInt > 5000 && cantidadInt <= 10000) {
        totalCantidad = cantidadInt * 0.15;
    }else {
        totalCantidad = cantidadInt * 0.10;
    }

    let totalPlazo;
    switch (plazoInt) {
        case 3:
            totalPlazo = cantidadInt * 0.04;
            break;
        case 6:
            totalPlazo = cantidadInt * 0.08;
            break;
        case 12:
            totalPlazo = cantidadInt * 0.16;
            break;
        case 24:
            totalPlazo = cantidadInt * 0.32;
            break;
            case 32:
                totalPlazo = cantidadInt * 0.64;
                break;
        default:
            break;
    }
    return totalCantidad + totalPlazo + cantidadInt;
    //console.log(totalPlazo);
}