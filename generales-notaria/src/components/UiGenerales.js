import React from "react";

export const UiGenerales = ({
  datos,
  children,
  genero,
  originariaYVecina,
  día,
  mes,
  año,
  empleo,
  estadoCivil,
  domicilio,
  cp,
  vecino,
  originario,
  numeroReverso,
  curp,
  rfc,
  fullName,
}) => {
  function convertOcrToString(ocr) {
    const mapeoNumeros = {
      0: "cero",
      1: "uno",
      2: "dos",
      3: "tres",
      4: "cuatro",
      5: "cinco",
      6: "seis",
      7: "siete",
      8: "ocho",
      9: "nueve",
    };
    return ocr
      .toString()
      .split("")
      .map((digito) => mapeoNumeros[digito])
      .join(", ");
  }

  function digitosATexto(str) {
    const especiales = {
      "00": "cero cero",
      "01": "cero uno",
      "02": "cero dos",
      "03": "cero tres",
      "04": "cero cuatro",
      "05": "cero cinco",
      "06": "cero seis",
      "07": "cero siete",
      "08": "cero ocho",
      "09": "cero nueve",
      10: "diez",
      11: "once",
      12: "doce",
      13: "trece",
      14: "catorce",
      15: "quince",
      20: "veinte",
      21: "veintiuno",
      22: "veintidós",
      23: "veintitrés",
      24: "veinticuatro",
      25: "veinticinco",
      26: "veintiséis",
      27: "veintisiete",
      28: "veintiocho",
      29: "veintinueve",
      30: "treinta",
      40: "cuarenta",
      50: "cincuenta",
      60: "sesenta",
      70: "setenta",
      80: "ochenta",
      90: "noventa",
      99: "noventa y nueve",
    };
    const decenas = [
      "",
      "",
      "veinte",
      "treinta",
      "cuarenta",
      "cincuenta",
      "sesenta",
      "setenta",
      "ochenta",
      "noventa",
    ];
    const unidades = [
      "",
      "uno",
      "dos",
      "tres",
      "cuatro",
      "cinco",
      "seis",
      "siete",
      "ocho",
      "nueve",
    ];
    if (especiales[str]) return especiales[str];
    if (str.length === 2) {
      const [d1, d2] = str.split("").map(Number);
      if (d1 === 1 && d2 <= 5) return especiales[str]; // del 10 al 15
      return `${decenas[d1]} y ${unidades[d2]}`;
    } else if (str.length === 1) {
      return unidades[Number(str)];
    } else {
      return str;
    }
  }

  function procesarCURP(cadena) {
    const bloques = [];
    let actual = "";
    let tipoAnterior = null;

    // Separar por tipo (letras vs números)
    for (let char of cadena) {
      const tipoActual = /\d/.test(char) ? "numero" : "letra";
      if (tipoActual !== tipoAnterior && actual.length > 0) {
        bloques.push({ tipo: tipoAnterior, valor: actual });
        actual = "";
      }
      actual += char;
      tipoAnterior = tipoActual;
    }
    if (actual.length > 0) {
      bloques.push({ tipo: tipoAnterior, valor: actual });
    }

    // Procesar bloques
    const resultado = bloques.map((bloque) => {
      if (bloque.tipo === "letra") {
        return `Letras ${bloque.valor.toUpperCase()}`;
      } else {
        const partes = [];
        for (let i = 0; i < bloque.valor.length; i += 2) {
          const digito = bloque.valor.slice(i, i + 2);
          partes.push(digitosATexto(digito));
        }
        return `Números ${partes.join(", ")}`;
      }
    });

    return resultado.join(", ");
  }

  function numeroATexto(n) {
    const unidades = [
      "",
      "uno",
      "dos",
      "tres",
      "cuatro",
      "cinco",
      "seis",
      "siete",
      "ocho",
      "nueve",
    ];

    const especiales = {
      10: "diez",
      11: "once",
      12: "doce",
      13: "trece",
      14: "catorce",
      15: "quince",
      20: "veinte",
      30: "treinta",
      40: "cuarenta",
      50: "cincuenta",
      60: "sesenta",
      70: "setenta",
      80: "ochenta",
      90: "noventa",
      100: "cien",
    };

    const decenas = [
      "",
      "",
      "veinte",
      "treinta",
      "cuarenta",
      "cincuenta",
      "sesenta",
      "setenta",
      "ochenta",
      "noventa",
    ];

    const centenas = [
      "",
      "ciento",
      "doscientos",
      "trescientos",
      "cuatrocientos",
      "quinientos",
      "seiscientos",
      "setecientos",
      "ochocientos",
      "novecientos",
    ];

    function convertirMenor100(num) {
      if (especiales[num]) return especiales[num];
      if (num < 10) return unidades[num];
      const d = Math.floor(num / 10);
      const u = num % 10;
      if (d === 2 && u > 0) return "veinti" + unidades[u];
      return decenas[d] + (u > 0 ? " y " + unidades[u] : "");
    }

    function convertirMenor1000(num) {
      if (num === 100) return "cien";
      const c = Math.floor(num / 100);
      const resto = num % 100;
      return (
        centenas[c] + (resto > 0 ? " " + convertirMenor100(resto) : "")
      ).trim();
    }

    if (n === 0) return "cero";
    if (n < 100) return convertirMenor100(n);
    if (n < 1000) return convertirMenor1000(n);
    if (n < 1000000) {
      const miles = Math.floor(n / 1000);
      const resto = n % 1000;
      const milesTexto = miles === 1 ? "mil" : numeroATexto(miles) + " mil";
      return (
        milesTexto + (resto > 0 ? " " + convertirMenor1000(resto) : "")
      ).trim();
    }

    return "Número demasiado grande";
  }

  // 🧪 Test
  console.log(numeroATexto(94472));

  return (
    <div className="container-generales">
      <p>
        {`${datos.fullName.toUpperCase()}.-Mexican${
          datos.genero
        } por nacimiento, ${
          datos.originariaYVecina
            ? `originari${datos.genero} y vecin${datos.genero} de la ciudad de ${datos.originTown}`
            : `originari${datos.genero} de la ciudad de  ${datos.originTown}`
        }, donde nació el día ${datos.day} (${numeroATexto(datos.day)}) de ${
          datos.month
        } de ${datos.year} (${numeroATexto(datos.year)}), ${datos.civilStatus}${
          datos.genero
        }, ${datos.occupation}, con
        domicilio en ${datos.currentAddress}, ${
          datos.originariaYVecina ? "" : `${datos.vecino}`
        } Código Postal ${datos.postalCode}
        (${numeroATexto(datos.postalCode)}), quien se identifica
        con credencial para votar con fotografía y numeros al reverso
        ${convertOcrToString(
          datos.backNumbers
        )}, expedida por el instituto Nacional Electoral con Clave
        Única de Registro de Población ${datos.curp.toUpperCase()} (${procesarCURP(
          datos.curp
        )}),
        expedida por la Secretaría de Gobernación, y con Clave Federal de
        Registro de Contribuyentes ${datos.rfc.toUpperCase()}(${procesarCURP(
          datos.rfc
        )}), expedida por el
        Servicio de Administración Tributaria.- - - - - - - - - - - - - - - - -
        - - -
        `}
        {children}
      </p>
    </div>
  );
};

export default UiGenerales;
