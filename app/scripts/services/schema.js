'use strict';

/**
 * @ngdoc service
 * @name fluApp.schema
 * @description
 * # schema
 * Factory in the fluApp.
 */
angular.module('fluApp').factory('schema', function () {
  return {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "http://example.com/example.json",
    "type": "object",
    "required": [
      "hospital",
      "numprocessoclinico",
      "datadeadmissao",
      "dataalta",
      "sexo",
      "datanascimento",
      "obito",
      "vacinado",
      "serotipagem"
    ],
    "properties": {
      "hospital": {
        "id": "/properties/hospital",
        "title": "Hospital",
        "description": "Hospital/Centro Hospitalar",
        "type": "string",
        "enum": [
          "British Hospital Lisbon XXI, S.A.",
          "British Hospital Management Care, SA",
          "Centro de Oncologia Prof. Doutor José Conde",
          "Centro Hospitalar Conde Ferreira",
          "Centro Hospitalar Psiquiátrico de Coimbra - Unidade Arnes",
          "Centro Hospitalar Psiquiátrico de Coimbra - Unidade Lorvão",
          "Centro Hospitalar Psiquiátrico de Coimbra - Unidade Sobral Cid",
          "Centro Hospitalar Vila Nova de Gaia/Espinho, EPE - Unidade I (antigo Hospital Eduardo Santos Silva)",
          "Centro Hospitalar Vila Nova de Gaia/Espinho, EPE - Unidade II (antigo Hospital Distrital Vila Nova de Gaia) ",
          "Centro Hospitalar Vila Nova de Gaia/Espinho, EPE - Unidade III (antigo Hospital Nossa Senhora da Ajuda - Espinho) ",
          "Hospitais da Universidade de Coimbra (Centro Hospitalar e Universitário de Coimbra, EPE)",
          "Hospital da Misericórdia de Vila Verde",
          "Hospital Amarante (Centro Hospitalar Tâmega e Sousa, EPE)",
          "Hospital Amato Lusitano (Unidade Local de Saúde de Castelo Branco, EPE)",
          "Hospital Arcebispo João Crisóstomo - Cantanhede",
          "Hospital Beatriz Ângelo",
          "Hospital Bernardino Lopes de Oliveira - Alcobaça (Centro Hospitalar de Leiria)",
          "Hospital Braga",
          "Hospital Bragança (Unidade Local de Saúde do Nordeste, EPE)",
          "Hospital Cândido de Figueiredo - Tondela (Centro Hospitalar de Tondela-Viseu, EPE)",
          "Hospital Cascais Dr. José de Almeida-HPP",
          "Hospital Chaves (Centro Hospitalar de Trás-os-Montes e Alto Douro, EPE)",
          "Hospital Conde de Bertiandos - Ponte de Lima (Unidade Local de Saúde do Alto Minho, EPE)",
          "Hospital CUF Descobertas, S.A.",
          "Hospital CUF Infante Santo, S.A.",
          "Hospital CUF Porto",
          "Hospital Curry Cabral (Centro Hospitalar de Lisboa Central, EPE)",
          "Hospital da Arrábida - Unidade do Grupo Espirito Santo - Vila Nova de Gaia",
          "Hospital da Confraria de Nossa Senhora da Nazaré",
          "Hospital da Cruz Vermelha Portuguesa",
          "Hospital da Horta, EPER",
          "Hospital da Lapa - Porto",
          "Hospital da Luz S.A.",
          "Hospital da Misericórdia da Póvoa de Lanhoso",
          "Hospital da Misericórdia de Arruda dos Vinhos",
          "Hospital da Misericordia de Castelo de Paiva",
          "Hospital da Misericórdia de Évora",
          "Hospital da Misericórdia de Paredes",
          "Hospital da Misericórdia de Ponte da Barca ",
          "Hospital da Misericórdia de Sangalhos",
          "Hospital da Misericórdia de Valpaços",
          "Hospital da Prelada",
          "Hospital da Senhora da Oliveira - Guimarães, EPE",
          "Hospital da Trindade",
          "Hospital da Trofa, S.A.",
          "Hospital das Forças Armadas - Polo Lisboa - Unidade Hospitalar do Lumiar",
          "Hospital de Dia da Maia",
          "Hospital de Dia de Famalicão",
          "Hospital de Loulé (Privado)",
          "Hospital de Santiago - Setúbal",
          "Hospital de Santo Espírito de Angra do Heroísmo, EPER",
          "Hospital de São Camilo - Portimão",
          "Hospital Distrital Caldas da Rainha (Centro Hospitalar do Oeste)",
          "Hospital Distrital de Águeda (Centro Hospitalar do Baixo Vouga, EPE)",
          "Hospital Distrital do Montijo (Centro Hospitalar Barreiro Montijo, EPE)",
          "Hospital Distrital Figueira da Foz, EPE",
          "Hospital Distrital Pombal (Centro Hospitalar de Leiria, EPE)",
          "Hospital Distrital São João da Madeira (Centro Hospitalar de Entre Douro e Vouga, EPE)",
          "Hospital Distrital Torres Vedras (Centro Hospitalar do Oeste)",
          "Hospital Divino Espírito Santo de Ponta Delgada, EPE",
          "Hospital do Divino Espírito Santo, EPER",
          "Hospital Dom Luiz I - Peso da Régua (Centro Hospitalar de Trás-os-Montes e Alto Douro, EPE)",
          "Hospital Dona Estefânia (Centro Hospitalar Lisboa Central)",
          "Hospital dos Marmeleiros",
          "Hospital dos SAMS",
          "Hospital Doutor João D`Almada",
          "Hospital Dr. Francisco Zagalo - Ovar",
          "Hospital Dr. José Maria Antunes Júnior - Torres Vedras (Centro Hospitalar do Oeste)",
          "Hospital Dr. José Maria Grande - Portalegre (Unidade Local de Saúde do Norte Alentejano, EPE)",
          "Hospital Dr. Manoel Constâncio - Abrantes (Centro Hospitalar Médio Tejo, EPE)",
          "Hospital Dr. Nélio Mendonça",
          "Hospital Egas Moniz (Centro Hospitalar de Lisboa Ocidental, EPE)",
          "Hospital Espírito Santo, EPE - Évora",
          "Hospital Fafe (Centro Hospitalar do Alto Ave, EPE)",
          "Hospital Famalicão (Centro Hospitalar do Médio Ave, EPE)",
          "Hospital Faro, EPE",
          "Hospital Fundão (Centro Hospitalar Cova da Beira, EPE)",
          "Hospital Garcia de Orta, EPE",
          "Hospital Geral - Centro Hospitalar e Universitário de Coimbra, E.P.E.",
          "Hospital Geral de Santo António (Centro Hospitalar do Porto, EPE)",
          "Hospital Infante D. Pedro - Aveiro (Centro Hospitalar do Baixo Vouga, EPE)",
          "Hospital Infantil S. João de Deus",
          "Hospital Joaquim Urbano (Centro Hospitalar do Porto, EPE)",
          "Hospital José Joaquim Fernandes - Beja (Unidade Local de Saúde do Baixo Alentejo, EPE)",
          "Hospital José Luciano de Castro - Anadia",
          "Hospital Júlio de Matos (Centro Hospitalar Psiquiátrico de Lisboa)",
          "Hospital Lagos ( Centro Hospitalar do Barlavento Algarvio, EPE)",
          "Hospital Lamego (Centro Hospitalar de Trás-os-Montes e Alto Douro, EPE)",
          "Hospital Litoral Alentejano (Unidade Local de Saúde do Litoral Alentejano, EPE)",
          "Hospital Macedo de Cavaleiros (Unidade Local de Saúde do Nordeste, EPE)",
          "Hospital Magalhães Lemos, EPE",
          "Hospital Militar de Coimbra",
          "Hospital Militar Regional N.Âº 1",
          "Hospital Mirandela (Unidade Local de Saúde do Nordeste, EPE)",
          "Hospital Misericórdia da Mealhada",
          "Hospital Nossa Senhora da Assunção - Seia (Unidade Local de Saúde da Guarda, EPE)",
          "Hospital Nossa Senhora da Conceição de Valongo (Centro Hospitalar de São João, EPE)",
          "Hospital Nossa Senhora da Graça - Tomar (Centro Hospitalar Médio Tejo, EPE)",
          "Hospital Nossa Senhora do Rosário (Centro Hospitalar Barreiro Montijo, EPE)",
          "Hospital Ortopédico Santiago do Outão (Centro Hospitalar de Setúbal, EPE)",
          "Hospital Padre Américo, Vale do Sousa (Centro Hospitalar Tâmega e Sousa, EPE)",
          "Hospital Particular de Viana do Castelo, Lda",
          "Hospital Particular do Algarve, S.A - Alvor",
          "Hospital Particular do Algarve, S.A - Gambelas",
          "Hospital Pediátrico de Coimbra (Centro Hospitalar e Universitário de Coimbra, EPE)",
          "Hospital Pedro Hispano (Unidade Local de Saúde de Matosinhos, EPE)",
          "Hospital Pêro da Covilhã (Centro Hospitalar Cova da Beira, EPE)",
          "Hospital Portimão (Centro Hospitalar do Barlavento Algarvio, EPE)",
          "Hospital Póvoa de Varzim (Centro Hospitalar Póvoa de Varzim Vila do Conde, EPE)",
          "Hospital Privado da Boa Nova",
          "Hospital Privado de Braga Centro",
          "Hospital Privado de Gaia",
          "Hospital Professor Doutor Fernando Fonseca, EPE",
          "Hospital Pulido Valente (Centro Hospitalar de Lisboa Norte, EPE)",
          "Hospital Rainha Santa Isabel - Torres Novas (Centro Hospitalar Médio Tejo, EPE)",
          "Hospital Santa Cruz (Centro Hospitalar de Lisboa Ocidental, EPE)",
          "Hospital Santa Luzia de Elvas (Unidade Local de Saúde do Norte Alentejano, EPE)",
          "Hospital Santa Luzia de Viana do Castelo (Unidade Local de Saúde do Alto Minho, EPE)",
          "Hospital Santa Maria - Porto",
          "Hospital Santa Maria (Centro Hospitalar de Lisboa Norte, EPE)",
          "Hospital Santa Maria Maior, EPE - Barcelos",
          "Hospital Santa Marta (Centro Hospitalar Lisboa Central)",
          "Hospital Santarém, EPE",
          "Hospital Santo André - Leiria (Centro Hospitalar de Leiria, EPE)",
          "Hospital Santo António dos Capuchos (Centro Hospitalar Lisboa Central)",
          "Hospital Santo Tirso (Centro Hospitalar do Médio Ave, EPE)",
          "Hospital São Bernardo (Centro Hospitalar de Setúbal, EPE)",
          "Hospital São Francisco Xavier (Centro Hospitalar de Lisboa Ocidental, EPE)",
          "Hospital São João (Centro Hospitalar de São João, EPE)",
          "Hospital São José (Centro Hospitalar Lisboa Central)",
          "Hospital São Miguel - Oliveira de Azeméis (Centro Hospitalar Entre Douro e Vouga, EPE)",
          "Hospital São Paulo - Serpa (Santa Casa da Misericórdia de Serpa)",
          "Hospital São Pedro de Vila Real (Centro Hospitalar de Trás-os-Montes e Alto Douro, EPE)",
          "Hospital São Pedro Gonçalves Telmo - Peniche (Centro Hospitalar do Oeste)",
          "Hospital São Sebastião, EPE (Centro Hospitalar de Entre Douro e Vouga, EPE)",
          "Hospital São Teotónio, EPE - Viseu (CHTV, EPE)",
          "Hospital Sousa Martins - Guarda (Unidade Local de Saúde da Guarda, EPE)",
          "Hospital Termal Rainha D. Leonor (Centro Hospitalar do Oeste)",
          "Hospital Terra Quente",
          "Hospital Vila do Conde (Centro Hospitalar Póvoa de Varzim Vila do Conde, EPE)",
          "Hospital Vila Franca de Xira",
          "Hospital Visconde de Salreu - Estarreja (Centro Hospitalar do Baixo Vouga, EPE)",
          "Hospital-Escola da Universidade Fernando Pessoa",
          "H.P.A.V. - Hospital Privado de Alfena",
          "H.P.B - Hospital Privado de Braga, S.A.",
          "HPP - Hospital de S. Gonçalo de Lagos",
          "HPP - Hospital de Santa Maria de Faro",
          "HPP - Hospital dos Cléricos",
          "HPP - Hospital dos Lusíadas",
          "HPP - Hospital Privado da Boavista",
          "Instituto Português Oncologia de Coimbra Francisco Gentil, EPE",
          "Instituto Português Oncologia de Lisboa Francisco Gentil, EPE",
          "Instituto Português Oncologia do Porto Francisco Gentil, EPE",
          "Maternidade Bissaya Barreto (Centro Hospitalar e Universitário de Coimbra, EPE)",
          "Maternidade Dr. Alfredo da Costa (Centro Hospitalar de Lisboa Central, EPE)",
          "Maternidade Dr. Daniel de Matos (Centro Hospitalar e Universitário de Coimbra, EPE)",
          "Maternidade Júlio Dinis (Centro Hospitalar do Porto, EPE)",
          "Misericórdia de Riba de Ave - Hospital Narciso Ferreira"
        ]
      },
      "numprocessoclinico": {
        "id": "/properties/numprocessoclinico",
        "title": "N.º processo clínico",
        "description": "Número do processo clínico no hospital",
        "type": "integer"
      },
      "datadeadmissao": {
        "id": "/properties/datadeadmissao",
        "title": "Data de admissão",
        "type": "string",
        "description": "Data de Admissão na UCI",
        "format": "date"
      },
      "dataalta": {
        "id": "/properties/dataalta",
        "title": "Data da alta",
        "description": "Data de Alta na UCI",
        "type": "string",
        "format": "date"
      },
      "sexo": {
        "id": "/properties/sexo",
        "title": "Sexo",
        "description": "Sexo do utente",
        "type": "string",
        "enum": ["M", "F", "I"]
      },
      "datanascimento": {
        "id": "/properties/datanascimento",
        "title": "Data de Nascimento",
        "description": "Data de nascimento do utente",
        "type": "string",
        "format": "date"
      },
      "obito": {
        "id": "/properties/obito",
        "title": "Óbito?",
        "description": "O utente faleceu?",
        "type": "string",
        "enum": ["Y", "N", "UNK"]
      },
      "dataobito": {
        "id": "/properties/dataobit",
        "title": "Data do òbito",
        "description": "Data do óbito (se aplicável)",
        "type": "string",
        "format": "date"
      },
      "causademorte": {
        "id": "/properties/causademorte",
        "title": "Causa de Morte",
        "description": "Causa de morte (se aplicável)",
        "type": "string"
      },

      "tosse": {
        "id": "/properties/tosse",
        "title": "Tosse",
        "type": "boolean"
      },
      "febre": {
        "id": "/properties/vebre",
        "title": "Febre",
        "type": "boolean"
      },
      "dispneia": {
        "id": "/properties/dispneia",
        "title": "Dispneia",
        "type": "boolean"
      },
      "odinofagia": {
        "id": "/properties/odinofagia",
        "title": "Odinofagia",
        "type": "boolean"
      },
      "outrosintoma": {
        "id": "/properties/outrosintoma",
        "title": "Outro sintoma",
        "type": "string"
      },
      "datainiciosintomas": {
        "id": "/properties/datainiciosintomas",
        "title": "Data de início de sintomas",
        "type": "string",
        "format": "date"
      },


      "vacinado": {
        "id": "/properties/vacinado",
        "title": "Vacinado",
        "description": "O doente foi vacinado contra a gripe nesta época?",
        "type": "string",
        "enum": ["Y", "N", "UNK"]
      },
      "datavacinacao": {
        "id": "/properties/datavacinacao",
        "title": "Data de Vacinação",
        "type": "string",
        "format": "date"
      },
      "sdra": {
        "id": "/properties/sdra",
        "title": "SDRA",
        "description": "Síndrome de Desconforto Respiratório no Adulto",
        "type": "boolean"
      },
      "bronquiolite": {
        "id": "/properties/bronquiolite",
        "title": "Bronquiolite",
        "type": "boolean"
      },
      "encefalite": {
        "id": "/properties/encefalite",
        "title": "Encefalite",
        "type": "boolean"
      },
      "miocardite": {
        "id": "/properties/miocardite",
        "title": "Miocardite",
        "type": "boolean"
      },
      "pneumonia": {
        "id": "/properties/pneumonia",
        "title": "Pneumonia",
        "type": "boolean"
      },
      "sepsis": {
        "id": "/properties/sepsis",
        "title": "Sepsis",
        "type": "boolean"
      },

      "asma": {
        "id": "/properties/asma",
        "title": "Asma",
        "type": "boolean"
      },
      "dpoc": {
        "id": "/properties/dpoc",
        "title": "DPOC",
        "type": "boolean"
      },
      "diabetes": {
        "id": "/properties/diabetes",
        "title": "Diabetes",
        "type": "boolean"
      },
      "doencaoncologica": {
        "id": "/properties/doencaoncologica",
        "title": "Doença Oncológica",
        "type": "boolean"
      },
      "doencacardiacacronica": {
        "id": "/properties/doencacardiacacronica",
        "title": "Doença Cardíaca Crónica",
        "type": "boolean"
      },
      "hiv": {
        "id": "/properties/hiv",
        "title": "HIV",
        "type": "boolean"
      },
      "doencarenalcronica": {
        "id": "/properties/doencarenalcronica",
        "title": "Doença Renal Crónica",
        "type": "boolean"
      },
      "doencahepaticacronica": {
        "id": "/properties/doencahepaticacronica",
        "title": "Doença Hepática Crónica",
        "type": "boolean"
      },
      "doencaneuromuscular": {
        "id": "/properties/doencaneuromuscular",
        "title": "Doença Neuromuscular",
        "type": "boolean"
      },
      "doencaneurocognitiva": {
        "id": "/properties/doencaneurocognitiva",
        "title": "Doença Neurocognitiva",
        "type": "boolean"
      },
      "obesidade": {
        "id": "/properties/obesidade",
        "title": "Obesidade",
        "description": "IMC entre 30kg/m2 e 40kg/m2",
        "type": "boolean"
      },
      "obesidademorbida": {
        "id": "/properties/obesidademorbida",
        "title": "Obesidade Mórbida",
        "description": "IMC > 40kg/m2",
        "type": "boolean"
      },
      "gravidez": {
        "id": "/properties/gravidez",
        "title": "Gravidez",
        "type": "boolean"
      },

      "oseltamivir": {
        "id": "/properties/oseltamivir",
        "title": "Oseltamivir",
        "type": "boolean"
      },
      "zanamivir": {
        "id": "/properties/zanamivir",
        "title": "Aanamivir",
        "type": "boolean"
      },

      "vni": {
        "id": "/properties/vni",
        "title": "Ventilação mecânica não invasiva",
        "description": "CPAP ou BIPAP",
        "type": "boolean"
      },
      "intubacao": {
        "id": "/properties/intubacao",
        "title": "Ventilação mecânica invasiva",
        "type": "boolean"
      },
      "ecmo": {
        "id": "/properties/ecmo",
        "title": "ECMO",
        "type": "boolean"
      },
      "dialise": {
        "id": "/properties/dialise",
        "title": "Técnica de substituição renal",
        "type": "boolean"
      },
      "zaragatoa": {
        "id": "/properties/zaragatoa",
        "title": "Zaragatoa naso ou orofaríngea",
        "type": "boolean"
      },
      "lavadoalveolar": {
        "id": "/properties/lavadoalveolar",
        "title": "Aspirado endotraqueal ou lavado broncoalveolar",
        "type": "boolean"
      },
      "biopsia": {
        "id": "/properties/lavadoalveolar",
        "title": "Biópsia tecidular post-mortem",
        "type": "boolean"
      },

      "serotipagem": {
        "id": "/properties/serotipagem",
        "title": "Tipo e subtipo do vírus",
        "type": "string",
        "enum": [
          "A",        // A, not sub-typed
          "AH1",      // A(H1), not N sub-typed
          "AH1N1",    // A(H1N1)
          "AH3",      // A(H3), not N sub-typed
          "AH3N2",    // A(H3N2)
          "AH5",      // A(H5), not N sub-typed
          "AH5N1",    // A(H5N1)
          "B",        // lineage not determined
          "BVic",     // Influenza type B, Victoria lineage
          "BYam",     // Influenza type B, Yamagata lineage
          "PanAH1",   // A(H1)pdm09
          "PanAH1N1", // A(H1N1)pdm09
          "UNK",      // Unknown
          "O"         // Outro
        ]
      },

      "observacoes": {
        "id": "/properties/observacoes",
        "title": "Observações",
        "type": "string"
      }

    }
  };
});
