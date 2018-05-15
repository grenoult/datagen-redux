describe('App initialization', () => {
    it ('Display types from API on load', () => {
        cy.server();
        cy.route('GET', 'http://randomdata.info:8081/api/fields', [
            {"id":1,"label":"IntegerBLAH","name":"integerldfnvlfdnv","type":"int","options":{"name":"Type","value":"type","options":{"increment":"Incremental (id)","positive":"Positive","negative":"Negative","positiveornegative":"Positive or Negative"}}},
            {"id":2,"label":"Regular Expression","name":"regex","type":"regex","textinput":true,"textinputplaceholder":"Type your regex here"},
            {"id":3,"label":"Date","name":"date","type":"date","options":{"name":"Range","value":"range","options":{"past":"Past","future":"Future","both":"Both"}}},
            {"id":4,"label":"Phone number","name":"phone","type":"phone","options":{"name":"Type","value":"type","options":{"us":"US","uk":"UK","aus":"Australian"}}},
            {"id":5,"label":"First Name","name":"firstname","type":"dbval","dbt":"firstname","options":{"name":"Sex","value":"sex","options":{"m":"Male","f":"Female","both":"Both"}}},
            {"id":6,"label":"Surname","name":"surname","type":"dbval","dbt":"surname"},
            {"id":7,"label":"City","name":"city","type":"dbval","dbt":"city"},
            {"id":8,"label":"Postcode","name":"postcode","type":"postcode"},
            {"id":9,"label":"State","name":"state","type":"dbval","dbt":"state"},
            {"id":10,"label":"Street","name":"street","type":"dbval","dbt":"street"},
            {"id":11,"label":"Street Number","name":"street Number","type":"streetnumber"}
         ])

        cy.visit('/');
    })
})