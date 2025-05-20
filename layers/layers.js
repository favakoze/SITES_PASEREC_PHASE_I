var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BDI_adm2_1 = new ol.format.GeoJSON();
var features_BDI_adm2_1 = format_BDI_adm2_1.readFeatures(json_BDI_adm2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BDI_adm2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BDI_adm2_1.addFeatures(features_BDI_adm2_1);
var lyr_BDI_adm2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BDI_adm2_1, 
                style: style_BDI_adm2_1,
                popuplayertitle: 'BDI_adm2',
                interactive: true,
                title: '<img src="styles/legend/BDI_adm2_1.png" /> BDI_adm2'
            });
var format_BDI_adm1_2 = new ol.format.GeoJSON();
var features_BDI_adm1_2 = format_BDI_adm1_2.readFeatures(json_BDI_adm1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BDI_adm1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BDI_adm1_2.addFeatures(features_BDI_adm1_2);
var lyr_BDI_adm1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BDI_adm1_2, 
                style: style_BDI_adm1_2,
                popuplayertitle: 'BDI_adm1',
                interactive: true,
                title: '<img src="styles/legend/BDI_adm1_2.png" /> BDI_adm1'
            });

        var lyr_GoogleMaps_3 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_BLocs_des_latrines_4 = new ol.format.GeoJSON();
var features_BLocs_des_latrines_4 = format_BLocs_des_latrines_4.readFeatures(json_BLocs_des_latrines_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BLocs_des_latrines_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLocs_des_latrines_4.addFeatures(features_BLocs_des_latrines_4);
var lyr_BLocs_des_latrines_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BLocs_des_latrines_4, 
                style: style_BLocs_des_latrines_4,
                popuplayertitle: 'BLocs_des_latrines',
                interactive: true,
                title: '<img src="styles/legend/BLocs_des_latrines_4.png" /> BLocs_des_latrines'
            });
var format_CANKUZOMatyazoKigamba_5 = new ol.format.GeoJSON();
var features_CANKUZOMatyazoKigamba_5 = format_CANKUZOMatyazoKigamba_5.readFeatures(json_CANKUZOMatyazoKigamba_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CANKUZOMatyazoKigamba_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CANKUZOMatyazoKigamba_5.addFeatures(features_CANKUZOMatyazoKigamba_5);
var lyr_CANKUZOMatyazoKigamba_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CANKUZOMatyazoKigamba_5, 
                style: style_CANKUZOMatyazoKigamba_5,
                popuplayertitle: 'CANKUZO- Matyazo- Kigamba',
                interactive: true,
                title: '<img src="styles/legend/CANKUZOMatyazoKigamba_5.png" /> CANKUZO- Matyazo- Kigamba'
            });
var format_CANKUZO_Gasarasi_6 = new ol.format.GeoJSON();
var features_CANKUZO_Gasarasi_6 = format_CANKUZO_Gasarasi_6.readFeatures(json_CANKUZO_Gasarasi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CANKUZO_Gasarasi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CANKUZO_Gasarasi_6.addFeatures(features_CANKUZO_Gasarasi_6);
var lyr_CANKUZO_Gasarasi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CANKUZO_Gasarasi_6, 
                style: style_CANKUZO_Gasarasi_6,
                popuplayertitle: 'CANKUZO_Gasarasi',
                interactive: true,
                title: '<img src="styles/legend/CANKUZO_Gasarasi_6.png" /> CANKUZO_Gasarasi'
            });
var format_CANKUZO_Mugozi_Cankuzo_7 = new ol.format.GeoJSON();
var features_CANKUZO_Mugozi_Cankuzo_7 = format_CANKUZO_Mugozi_Cankuzo_7.readFeatures(json_CANKUZO_Mugozi_Cankuzo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CANKUZO_Mugozi_Cankuzo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CANKUZO_Mugozi_Cankuzo_7.addFeatures(features_CANKUZO_Mugozi_Cankuzo_7);
var lyr_CANKUZO_Mugozi_Cankuzo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CANKUZO_Mugozi_Cankuzo_7, 
                style: style_CANKUZO_Mugozi_Cankuzo_7,
                popuplayertitle: 'CANKUZO_Mugozi_Cankuzo',
                interactive: true,
                title: '<img src="styles/legend/CANKUZO_Mugozi_Cankuzo_7.png" /> CANKUZO_Mugozi_Cankuzo'
            });
var format_CANKUZO_Rutoke_8 = new ol.format.GeoJSON();
var features_CANKUZO_Rutoke_8 = format_CANKUZO_Rutoke_8.readFeatures(json_CANKUZO_Rutoke_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CANKUZO_Rutoke_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CANKUZO_Rutoke_8.addFeatures(features_CANKUZO_Rutoke_8);
var lyr_CANKUZO_Rutoke_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CANKUZO_Rutoke_8, 
                style: style_CANKUZO_Rutoke_8,
                popuplayertitle: 'CANKUZO_Rutoke',
                interactive: true,
                title: '<img src="styles/legend/CANKUZO_Rutoke_8.png" /> CANKUZO_Rutoke'
            });
var format_CIBITOKE_KabungubunguKabuyeNdava_9 = new ol.format.GeoJSON();
var features_CIBITOKE_KabungubunguKabuyeNdava_9 = format_CIBITOKE_KabungubunguKabuyeNdava_9.readFeatures(json_CIBITOKE_KabungubunguKabuyeNdava_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CIBITOKE_KabungubunguKabuyeNdava_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CIBITOKE_KabungubunguKabuyeNdava_9.addFeatures(features_CIBITOKE_KabungubunguKabuyeNdava_9);
var lyr_CIBITOKE_KabungubunguKabuyeNdava_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CIBITOKE_KabungubunguKabuyeNdava_9, 
                style: style_CIBITOKE_KabungubunguKabuyeNdava_9,
                popuplayertitle: 'CIBITOKE_ Kabungubungu- Kabuye- Ndava',
                interactive: true,
                title: '<img src="styles/legend/CIBITOKE_KabungubunguKabuyeNdava_9.png" /> CIBITOKE_ Kabungubungu- Kabuye- Ndava'
            });
var format_CIBITOKE_Ruhwa_Mparambo_10 = new ol.format.GeoJSON();
var features_CIBITOKE_Ruhwa_Mparambo_10 = format_CIBITOKE_Ruhwa_Mparambo_10.readFeatures(json_CIBITOKE_Ruhwa_Mparambo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CIBITOKE_Ruhwa_Mparambo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CIBITOKE_Ruhwa_Mparambo_10.addFeatures(features_CIBITOKE_Ruhwa_Mparambo_10);
var lyr_CIBITOKE_Ruhwa_Mparambo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CIBITOKE_Ruhwa_Mparambo_10, 
                style: style_CIBITOKE_Ruhwa_Mparambo_10,
                popuplayertitle: 'CIBITOKE_Ruhwa_Mparambo',
                interactive: true,
                title: '<img src="styles/legend/CIBITOKE_Ruhwa_Mparambo_10.png" /> CIBITOKE_Ruhwa_Mparambo'
            });
var format_BUBANZA_NyakabandaKagwemaII_11 = new ol.format.GeoJSON();
var features_BUBANZA_NyakabandaKagwemaII_11 = format_BUBANZA_NyakabandaKagwemaII_11.readFeatures(json_BUBANZA_NyakabandaKagwemaII_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUBANZA_NyakabandaKagwemaII_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUBANZA_NyakabandaKagwemaII_11.addFeatures(features_BUBANZA_NyakabandaKagwemaII_11);
var lyr_BUBANZA_NyakabandaKagwemaII_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUBANZA_NyakabandaKagwemaII_11, 
                style: style_BUBANZA_NyakabandaKagwemaII_11,
                popuplayertitle: 'BUBANZA_Nyakabanda- Kagwema II',
                interactive: true,
                title: '<img src="styles/legend/BUBANZA_NyakabandaKagwemaII_11.png" /> BUBANZA_Nyakabanda- Kagwema II'
            });
var format_RUTANA_Gakwende_12 = new ol.format.GeoJSON();
var features_RUTANA_Gakwende_12 = format_RUTANA_Gakwende_12.readFeatures(json_RUTANA_Gakwende_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUTANA_Gakwende_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTANA_Gakwende_12.addFeatures(features_RUTANA_Gakwende_12);
var lyr_RUTANA_Gakwende_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTANA_Gakwende_12, 
                style: style_RUTANA_Gakwende_12,
                popuplayertitle: 'RUTANA_Gakwende',
                interactive: true,
                title: '<img src="styles/legend/RUTANA_Gakwende_12.png" /> RUTANA_Gakwende'
            });
var format_RUTANA_KangoziMusongati_13 = new ol.format.GeoJSON();
var features_RUTANA_KangoziMusongati_13 = format_RUTANA_KangoziMusongati_13.readFeatures(json_RUTANA_KangoziMusongati_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUTANA_KangoziMusongati_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTANA_KangoziMusongati_13.addFeatures(features_RUTANA_KangoziMusongati_13);
var lyr_RUTANA_KangoziMusongati_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTANA_KangoziMusongati_13, 
                style: style_RUTANA_KangoziMusongati_13,
                popuplayertitle: 'RUTANA_Kangozi- Musongati',
                interactive: true,
                title: '<img src="styles/legend/RUTANA_KangoziMusongati_13.png" /> RUTANA_Kangozi- Musongati'
            });
var format_RUYIGI_GakungweI_14 = new ol.format.GeoJSON();
var features_RUYIGI_GakungweI_14 = format_RUYIGI_GakungweI_14.readFeatures(json_RUYIGI_GakungweI_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUYIGI_GakungweI_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUYIGI_GakungweI_14.addFeatures(features_RUYIGI_GakungweI_14);
var lyr_RUYIGI_GakungweI_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUYIGI_GakungweI_14, 
                style: style_RUYIGI_GakungweI_14,
                popuplayertitle: 'RUYIGI_Gakungwe I',
                interactive: true,
                title: '<img src="styles/legend/RUYIGI_GakungweI_14.png" /> RUYIGI_Gakungwe I'
            });
var format_RUYIGI_GakungweII_15 = new ol.format.GeoJSON();
var features_RUYIGI_GakungweII_15 = format_RUYIGI_GakungweII_15.readFeatures(json_RUYIGI_GakungweII_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUYIGI_GakungweII_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUYIGI_GakungweII_15.addFeatures(features_RUYIGI_GakungweII_15);
var lyr_RUYIGI_GakungweII_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUYIGI_GakungweII_15, 
                style: style_RUYIGI_GakungweII_15,
                popuplayertitle: 'RUYIGI_Gakungwe II',
                interactive: true,
                title: '<img src="styles/legend/RUYIGI_GakungweII_15.png" /> RUYIGI_Gakungwe II'
            });
var format_RUYIGI_Gisunika_16 = new ol.format.GeoJSON();
var features_RUYIGI_Gisunika_16 = format_RUYIGI_Gisunika_16.readFeatures(json_RUYIGI_Gisunika_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUYIGI_Gisunika_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUYIGI_Gisunika_16.addFeatures(features_RUYIGI_Gisunika_16);
var lyr_RUYIGI_Gisunika_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUYIGI_Gisunika_16, 
                style: style_RUYIGI_Gisunika_16,
                popuplayertitle: 'RUYIGI_Gisunika',
                interactive: true,
                title: '<img src="styles/legend/RUYIGI_Gisunika_16.png" /> RUYIGI_Gisunika'
            });
var format_RUYIGI_KanyenkandaMurehe_17 = new ol.format.GeoJSON();
var features_RUYIGI_KanyenkandaMurehe_17 = format_RUYIGI_KanyenkandaMurehe_17.readFeatures(json_RUYIGI_KanyenkandaMurehe_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUYIGI_KanyenkandaMurehe_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUYIGI_KanyenkandaMurehe_17.addFeatures(features_RUYIGI_KanyenkandaMurehe_17);
var lyr_RUYIGI_KanyenkandaMurehe_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUYIGI_KanyenkandaMurehe_17, 
                style: style_RUYIGI_KanyenkandaMurehe_17,
                popuplayertitle: 'RUYIGI_Kanyenkanda-Murehe',
                interactive: true,
                title: '<img src="styles/legend/RUYIGI_KanyenkandaMurehe_17.png" /> RUYIGI_Kanyenkanda-Murehe'
            });
var format_RUYIGI_Kizige_18 = new ol.format.GeoJSON();
var features_RUYIGI_Kizige_18 = format_RUYIGI_Kizige_18.readFeatures(json_RUYIGI_Kizige_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUYIGI_Kizige_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUYIGI_Kizige_18.addFeatures(features_RUYIGI_Kizige_18);
var lyr_RUYIGI_Kizige_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUYIGI_Kizige_18, 
                style: style_RUYIGI_Kizige_18,
                popuplayertitle: 'RUYIGI_Kizige',
                interactive: true,
                title: '<img src="styles/legend/RUYIGI_Kizige_18.png" /> RUYIGI_Kizige'
            });
var format_RUYIGI_Mubavu_19 = new ol.format.GeoJSON();
var features_RUYIGI_Mubavu_19 = format_RUYIGI_Mubavu_19.readFeatures(json_RUYIGI_Mubavu_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUYIGI_Mubavu_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUYIGI_Mubavu_19.addFeatures(features_RUYIGI_Mubavu_19);
var lyr_RUYIGI_Mubavu_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUYIGI_Mubavu_19, 
                style: style_RUYIGI_Mubavu_19,
                popuplayertitle: 'RUYIGI_Mubavu',
                interactive: true,
                title: '<img src="styles/legend/RUYIGI_Mubavu_19.png" /> RUYIGI_Mubavu'
            });
var format_RUYIGI_Musenga_Bartye_20 = new ol.format.GeoJSON();
var features_RUYIGI_Musenga_Bartye_20 = format_RUYIGI_Musenga_Bartye_20.readFeatures(json_RUYIGI_Musenga_Bartye_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUYIGI_Musenga_Bartye_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUYIGI_Musenga_Bartye_20.addFeatures(features_RUYIGI_Musenga_Bartye_20);
var lyr_RUYIGI_Musenga_Bartye_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUYIGI_Musenga_Bartye_20, 
                style: style_RUYIGI_Musenga_Bartye_20,
                popuplayertitle: 'RUYIGI_Musenga_Bartye',
                interactive: true,
                title: '<img src="styles/legend/RUYIGI_Musenga_Bartye_20.png" /> RUYIGI_Musenga_Bartye'
            });
var format_DESCRIPTIONDELAEP_21 = new ol.format.GeoJSON();
var features_DESCRIPTIONDELAEP_21 = format_DESCRIPTIONDELAEP_21.readFeatures(json_DESCRIPTIONDELAEP_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DESCRIPTIONDELAEP_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DESCRIPTIONDELAEP_21.addFeatures(features_DESCRIPTIONDELAEP_21);
var lyr_DESCRIPTIONDELAEP_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DESCRIPTIONDELAEP_21, 
                style: style_DESCRIPTIONDELAEP_21,
                popuplayertitle: 'DESCRIPTION DE L\'AEP',
                interactive: true,
                title: '<img src="styles/legend/DESCRIPTIONDELAEP_21.png" /> DESCRIPTION DE L\'AEP'
            });

lyr_OSMStandard_0.setVisible(true);lyr_BDI_adm2_1.setVisible(true);lyr_BDI_adm1_2.setVisible(true);lyr_GoogleMaps_3.setVisible(true);lyr_BLocs_des_latrines_4.setVisible(true);lyr_CANKUZOMatyazoKigamba_5.setVisible(true);lyr_CANKUZO_Gasarasi_6.setVisible(true);lyr_CANKUZO_Mugozi_Cankuzo_7.setVisible(true);lyr_CANKUZO_Rutoke_8.setVisible(true);lyr_CIBITOKE_KabungubunguKabuyeNdava_9.setVisible(true);lyr_CIBITOKE_Ruhwa_Mparambo_10.setVisible(true);lyr_BUBANZA_NyakabandaKagwemaII_11.setVisible(true);lyr_RUTANA_Gakwende_12.setVisible(true);lyr_RUTANA_KangoziMusongati_13.setVisible(true);lyr_RUYIGI_GakungweI_14.setVisible(true);lyr_RUYIGI_GakungweII_15.setVisible(true);lyr_RUYIGI_Gisunika_16.setVisible(true);lyr_RUYIGI_KanyenkandaMurehe_17.setVisible(true);lyr_RUYIGI_Kizige_18.setVisible(true);lyr_RUYIGI_Mubavu_19.setVisible(true);lyr_RUYIGI_Musenga_Bartye_20.setVisible(true);lyr_DESCRIPTIONDELAEP_21.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BDI_adm2_1,lyr_BDI_adm1_2,lyr_GoogleMaps_3,lyr_BLocs_des_latrines_4,lyr_CANKUZOMatyazoKigamba_5,lyr_CANKUZO_Gasarasi_6,lyr_CANKUZO_Mugozi_Cankuzo_7,lyr_CANKUZO_Rutoke_8,lyr_CIBITOKE_KabungubunguKabuyeNdava_9,lyr_CIBITOKE_Ruhwa_Mparambo_10,lyr_BUBANZA_NyakabandaKagwemaII_11,lyr_RUTANA_Gakwende_12,lyr_RUTANA_KangoziMusongati_13,lyr_RUYIGI_GakungweI_14,lyr_RUYIGI_GakungweII_15,lyr_RUYIGI_Gisunika_16,lyr_RUYIGI_KanyenkandaMurehe_17,lyr_RUYIGI_Kizige_18,lyr_RUYIGI_Mubavu_19,lyr_RUYIGI_Musenga_Bartye_20,lyr_DESCRIPTIONDELAEP_21];
lyr_BDI_adm2_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_BDI_adm1_2.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_BLocs_des_latrines_4.set('fieldAliases', {'Province': 'Province', 'Commune': 'Commune', 'Colline': 'Colline', 'Nom d\'�tablissement': 'Nom d\'�tablissement', 'Nbre de Garcon': 'Nbre de Garcon', 'Nbre de fille': 'Nbre de fille', 'Nombre de Blocs': 'Nombre de Blocs', 'Nombre des portes': 'Nombre des portes', 'Prendre la photo du site � exploiter': 'Prendre la photo du site � exploiter', 'Prendre la photo du site � exploiter_URL': 'Prendre la photo du site � exploiter_URL', 'Prendre les cordonn�es GPS': 'Prendre les cordonn�es GPS', '_Prendre les cordonn�es GPS_latitude': '_Prendre les cordonn�es GPS_latitude', '_Prendre les cordonn�es GPS_longitude': '_Prendre les cordonn�es GPS_longitude', '_Prendre les cordonn�es GPS_altitude': '_Prendre les cordonn�es GPS_altitude', '_Prendre les cordonn�es GPS_precision': '_Prendre les cordonn�es GPS_precision', });
lyr_CANKUZOMatyazoKigamba_5.set('fieldAliases', {'Province': 'Province', 'Commune': 'Commune', 'Colline': 'Colline', 'Sous_Colline': 'Sous_Colline', 'date de collecte': 'date de collecte', 'Nom de l\'AEP': 'Nom de l\'AEP', 'Nom d\'ouvrage': 'Nom d\'ouvrage', 'Etat de mise en oeuvre de l\'ouvrage': 'Etat de mise en oeuvre de l\'ouvrage', 'Volume (m3)': 'Volume (m3)', 'Prendre la photo d\'ouvrages existant': 'Prendre la photo d\'ouvrages existant', 'Prendre la photo d\'ouvrages existant_URL': 'Prendre la photo d\'ouvrages existant_URL', 'Prendre la photo du site � exploiter': 'Prendre la photo du site � exploiter', 'Prendre la photo du site � exploiter_URL': 'Prendre la photo du site � exploiter_URL', 'Prendre les cordonn�es GPS': 'Prendre les cordonn�es GPS', '_Prendre les cordonn�es GPS_latitude': '_Prendre les cordonn�es GPS_latitude', '_Prendre les cordonn�es GPS_longitude': '_Prendre les cordonn�es GPS_longitude', '_Prendre les cordonn�es GPS_altitude': '_Prendre les cordonn�es GPS_altitude', '_Prendre les cordonn�es GPS_precision': '_Prendre les cordonn�es GPS_precision', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_status': '_status', '_submitted_by': '_submitted_by', '__version__': '__version__', '_tags': '_tags', '_index': '_index', });
lyr_CANKUZO_Gasarasi_6.set('fieldAliases', {'Province': 'Province', 'Commune': 'Commune', 'Colline': 'Colline', 'Sous_Colline': 'Sous_Colline', 'date de collecte': 'date de collecte', 'Nom de l\'AEP': 'Nom de l\'AEP', 'Nom d\'ouvrage': 'Nom d\'ouvrage', 'Etat de mise en oeuvre de l\'ouvrage': 'Etat de mise en oeuvre de l\'ouvrage', 'Volume (m3)': 'Volume (m3)', 'Prendre la photo d\'ouvrages existant': 'Prendre la photo d\'ouvrages existant', 'Prendre la photo d\'ouvrages existant_URL': 'Prendre la photo d\'ouvrages existant_URL', 'Prendre la photo du site � exploiter': 'Prendre la photo du site � exploiter', 'Prendre la photo du site � exploiter_URL': 'Prendre la photo du site � exploiter_URL', 'Prendre les cordonn�es GPS': 'Prendre les cordonn�es GPS', '_Prendre les cordonn�es GPS_latitude': '_Prendre les cordonn�es GPS_latitude', '_Prendre les cordonn�es GPS_longitude': '_Prendre les cordonn�es GPS_longitude', '_Prendre les cordonn�es GPS_altitude': '_Prendre les cordonn�es GPS_altitude', '_Prendre les cordonn�es GPS_precision': '_Prendre les cordonn�es GPS_precision', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_status': '_status', '_submitted_by': '_submitted_by', '__version__': '__version__', '_tags': '_tags', '_index': '_index', });
lyr_CANKUZO_Mugozi_Cankuzo_7.set('fieldAliases', {'Province': 'Province', 'Commune': 'Commune', 'Colline': 'Colline', 'Sous_Colline': 'Sous_Colline', 'date de collecte': 'date de collecte', 'Nom de l\'AEP': 'Nom de l\'AEP', 'Nom d\'ouvrage': 'Nom d\'ouvrage', 'Etat de mise en oeuvre de l\'ouvrage': 'Etat de mise en oeuvre de l\'ouvrage', 'Volume (m3)': 'Volume (m3)', 'Prendre la photo d\'ouvrages existant': 'Prendre la photo d\'ouvrages existant', 'Prendre la photo d\'ouvrages existant_URL': 'Prendre la photo d\'ouvrages existant_URL', 'Prendre la photo du site � exploiter': 'Prendre la photo du site � exploiter', 'Prendre la photo du site � exploiter_URL': 'Prendre la photo du site � exploiter_URL', 'Prendre les cordonn�es GPS': 'Prendre les cordonn�es GPS', '_Prendre les cordonn�es GPS_latitude': '_Prendre les cordonn�es GPS_latitude', '_Prendre les cordonn�es GPS_longitude': '_Prendre les cordonn�es GPS_longitude', '_Prendre les cordonn�es GPS_altitude': '_Prendre les cordonn�es GPS_altitude', '_Prendre les cordonn�es GPS_precision': '_Prendre les cordonn�es GPS_precision', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_status': '_status', '_submitted_by': '_submitted_by', '__version__': '__version__', '_tags': '_tags', '_index': '_index', });
lyr_CANKUZO_Rutoke_8.set('fieldAliases', {'Province': 'Province', 'Commune': 'Commune', 'Colline': 'Colline', 'Sous_Colline': 'Sous_Colline', 'date de collecte': 'date de collecte', 'Nom de l\'AEP': 'Nom de l\'AEP', 'Nom d\'ouvrage': 'Nom d\'ouvrage', 'Etat de mise en oeuvre de l\'ouvrage': 'Etat de mise en oeuvre de l\'ouvrage', 'Volume (m3)': 'Volume (m3)', 'Prendre la photo d\'ouvrages existant': 'Prendre la photo d\'ouvrages existant', 'Prendre la photo d\'ouvrages existant_URL': 'Prendre la photo d\'ouvrages existant_URL', 'Prendre la photo du site � exploiter': 'Prendre la photo du site � exploiter', 'Prendre la photo du site � exploiter_URL': 'Prendre la photo du site � exploiter_URL', 'Prendre les cordonn�es GPS': 'Prendre les cordonn�es GPS', '_Prendre les cordonn�es GPS_latitude': '_Prendre les cordonn�es GPS_latitude', '_Prendre les cordonn�es GPS_longitude': '_Prendre les cordonn�es GPS_longitude', '_Prendre les cordonn�es GPS_altitude': '_Prendre les cordonn�es GPS_altitude', '_Prendre les cordonn�es GPS_precision': '_Prendre les cordonn�es GPS_precision', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_status': '_status', '_submitted_by': '_submitted_by', '__version__': '__version__', '_tags': '_tags', '_index': '_index', });
lyr_CIBITOKE_KabungubunguKabuyeNdava_9.set('fieldAliases', {'Province': 'Province', 'Commune': 'Commune', 'Colline': 'Colline', 'Sous_Colline': 'Sous_Colline', 'date de collecte': 'date de collecte', 'Nom de l\'AEP': 'Nom de l\'AEP', 'Nom d\'ouvrage': 'Nom d\'ouvrage', 'Etat de mise en oeuvre de l\'ouvrage': 'Etat de mise en oeuvre de l\'ouvrage', 'Volume (m3)': 'Volume (m3)', 'Prendre la photo d\'ouvrages existant': 'Prendre la photo d\'ouvrages existant', 'Prendre la photo d\'ouvrages existant_URL': 'Prendre la photo d\'ouvrages existant_URL', 'Prendre la photo du site � exploiter': 'Prendre la photo du site � exploiter', 'Prendre la photo du site � exploiter_URL': 'Prendre la photo du site � exploiter_URL', 'Prendre les cordonn�es GPS': 'Prendre les cordonn�es GPS', '_Prendre les cordonn�es GPS_latitude': '_Prendre les cordonn�es GPS_latitude', '_Prendre les cordonn�es GPS_longitude': '_Prendre les cordonn�es GPS_longitude', '_Prendre les cordonn�es GPS_altitude': '_Prendre les cordonn�es GPS_altitude', '_Prendre les cordonn�es GPS_precision': '_Prendre les cordonn�es GPS_precision', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_status': '_status', '_submitted_by': '_submitted_by', '__version__': '__version__', '_tags': '_tags', '_index': '_index', });
lyr_CIBITOKE_Ruhwa_Mparambo_10.set('fieldAliases', {'Province': 'Province', 'Commune': 'Commune', 'Colline': 'Colline', 'Sous_Colline': 'Sous_Colline', 'date de collecte': 'date de collecte', 'Nom de l\'AEP': 'Nom de l\'AEP', 'Nom d\'ouvrage': 'Nom d\'ouvrage', 'Etat de mise en oeuvre de l\'ouvrage': 'Etat de mise en oeuvre de l\'ouvrage', 'Volume (m3)': 'Volume (m3)', 'Prendre la photo d\'ouvrages existant': 'Prendre la photo d\'ouvrages existant', 'Prendre la photo d\'ouvrages existant_URL': 'Prendre la photo d\'ouvrages existant_URL', 'Prendre la photo du site � exploiter': 'Prendre la photo du site � exploiter', 'Prendre la photo du site � exploiter_URL': 'Prendre la photo du site � exploiter_URL', 'Prendre les cordonn�es GPS': 'Prendre les cordonn�es GPS', '_Prendre les cordonn�es GPS_latitude': '_Prendre les cordonn�es GPS_latitude', '_Prendre les cordonn�es GPS_longitude': '_Prendre les cordonn�es GPS_longitude', '_Prendre les cordonn�es GPS_altitude': '_Prendre les cordonn�es GPS_altitude', '_Prendre les cordonn�es GPS_precision': '_Prendre les cordonn�es GPS_precision', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_status': '_status', '_submitted_by': '_submitted_by', '__version__': '__version__', '_tags': '_tags', '_index': '_index', });
lyr_BUBANZA_NyakabandaKagwemaII_11.set('fieldAliases', {'Province': 'Province', 'Commune': 'Commune', 'Colline': 'Colline', 'Sous_Colline': 'Sous_Colline', 'date de collecte': 'date de collecte', 'Nom de l\'AEP': 'Nom de l\'AEP', 'Nom d\'ouvrage': 'Nom d\'ouvrage', 'Etat de mise en oeuvre de l\'ouvrage': 'Etat de mise en oeuvre de l\'ouvrage', 'Volume (m3)': 'Volume (m3)', 'Prendre la photo d\'ouvrages existant': 'Prendre la photo d\'ouvrages existant', 'Prendre la photo d\'ouvrages existant_URL': 'Prendre la photo d\'ouvrages existant_URL', 'Prendre la photo du site � exploiter': 'Prendre la photo du site � exploiter', 'Prendre la photo du site � exploiter_URL': 'Prendre la photo du site � exploiter_URL', 'Prendre les cordonn�es GPS': 'Prendre les cordonn�es GPS', '_Prendre les cordonn�es GPS_latitude': '_Prendre les cordonn�es GPS_latitude', '_Prendre les cordonn�es GPS_longitude': '_Prendre les cordonn�es GPS_longitude', '_Prendre les cordonn�es GPS_altitude': '_Prendre les cordonn�es GPS_altitude', '_Prendre les cordonn�es GPS_precision': '_Prendre les cordonn�es GPS_precision', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_status': '_status', '_submitted_by': '_submitted_by', '__version__': '__version__', '_tags': '_tags', '_index': '_index', });
lyr_RUTANA_Gakwende_12.set('fieldAliases', {'Province': 'Province', 'Commune': 'Commune', 'Colline': 'Colline', 'Sous_Colline': 'Sous_Colline', 'date de collecte': 'date de collecte', 'Nom de l\'AEP': 'Nom de l\'AEP', 'Nom d\'ouvrage': 'Nom d\'ouvrage', 'Etat de mise en oeuvre de l\'ouvrage': 'Etat de mise en oeuvre de l\'ouvrage', 'Volume (m3)': 'Volume (m3)', 'Prendre la photo d\'ouvrages existant': 'Prendre la photo d\'ouvrages existant', 'Prendre la photo d\'ouvrages existant_URL': 'Prendre la photo d\'ouvrages existant_URL', 'Prendre la photo du site � exploiter': 'Prendre la photo du site � exploiter', 'Prendre la photo du site � exploiter_URL': 'Prendre la photo du site � exploiter_URL', 'Prendre les cordonn�es GPS': 'Prendre les cordonn�es GPS', '_Prendre les cordonn�es GPS_latitude': '_Prendre les cordonn�es GPS_latitude', '_Prendre les cordonn�es GPS_longitude': '_Prendre les cordonn�es GPS_longitude', '_Prendre les cordonn�es GPS_altitude': '_Prendre les cordonn�es GPS_altitude', '_Prendre les cordonn�es GPS_precision': '_Prendre les cordonn�es GPS_precision', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_status': '_status', '_submitted_by': '_submitted_by', '__version__': '__version__', '_tags': '_tags', '_index': '_index', });
lyr_RUTANA_KangoziMusongati_13.set('fieldAliases', {'Province': 'Province', 'Commune': 'Commune', 'Colline': 'Colline', 'Sous_Colline': 'Sous_Colline', 'date de collecte': 'date de collecte', 'Nom de l\'AEP': 'Nom de l\'AEP', 'Nom d\'ouvrage': 'Nom d\'ouvrage', 'Etat de mise en oeuvre de l\'ouvrage': 'Etat de mise en oeuvre de l\'ouvrage', 'Volume (m3)': 'Volume (m3)', 'Prendre la photo d\'ouvrages existant': 'Prendre la photo d\'ouvrages existant', 'Prendre la photo d\'ouvrages existant_URL': 'Prendre la photo d\'ouvrages existant_URL', 'Prendre la photo du site � exploiter': 'Prendre la photo du site � exploiter', 'Prendre la photo du site � exploiter_URL': 'Prendre la photo du site � exploiter_URL', 'Prendre les cordonn�es GPS': 'Prendre les cordonn�es GPS', '_Prendre les cordonn�es GPS_latitude': '_Prendre les cordonn�es GPS_latitude', '_Prendre les cordonn�es GPS_longitude': '_Prendre les cordonn�es GPS_longitude', '_Prendre les cordonn�es GPS_altitude': '_Prendre les cordonn�es GPS_altitude', '_Prendre les cordonn�es GPS_precision': '_Prendre les cordonn�es GPS_precision', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_status': '_status', '_submitted_by': '_submitted_by', '__version__': '__version__', '_tags': '_tags', '_index': '_index', });
lyr_RUYIGI_GakungweI_14.set('fieldAliases', {'Province': 'Province', 'Commune': 'Commune', 'Colline': 'Colline', 'Sous_Colline': 'Sous_Colline', 'date de collecte': 'date de collecte', 'Nom de l\'AEP': 'Nom de l\'AEP', 'Nom d\'ouvrage': 'Nom d\'ouvrage', 'Etat de mise en oeuvre de l\'ouvrage': 'Etat de mise en oeuvre de l\'ouvrage', 'Volume (m3)': 'Volume (m3)', 'Prendre la photo d\'ouvrages existant': 'Prendre la photo d\'ouvrages existant', 'Prendre la photo d\'ouvrages existant_URL': 'Prendre la photo d\'ouvrages existant_URL', 'Prendre la photo du site � exploiter': 'Prendre la photo du site � exploiter', 'Prendre la photo du site � exploiter_URL': 'Prendre la photo du site � exploiter_URL', 'Prendre les cordonn�es GPS': 'Prendre les cordonn�es GPS', '_Prendre les cordonn�es GPS_latitude': '_Prendre les cordonn�es GPS_latitude', '_Prendre les cordonn�es GPS_longitude': '_Prendre les cordonn�es GPS_longitude', '_Prendre les cordonn�es GPS_altitude': '_Prendre les cordonn�es GPS_altitude', '_Prendre les cordonn�es GPS_precision': '_Prendre les cordonn�es GPS_precision', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_status': '_status', '_submitted_by': '_submitted_by', '__version__': '__version__', '_tags': '_tags', '_index': '_index', });
lyr_RUYIGI_GakungweII_15.set('fieldAliases', {'Province': 'Province', 'Commune': 'Commune', 'Colline': 'Colline', 'Sous_Colline': 'Sous_Colline', 'date de collecte': 'date de collecte', 'Nom de l\'AEP': 'Nom de l\'AEP', 'Nom d\'ouvrage': 'Nom d\'ouvrage', 'Etat de mise en oeuvre de l\'ouvrage': 'Etat de mise en oeuvre de l\'ouvrage', 'Volume (m3)': 'Volume (m3)', 'Prendre la photo d\'ouvrages existant': 'Prendre la photo d\'ouvrages existant', 'Prendre la photo d\'ouvrages existant_URL': 'Prendre la photo d\'ouvrages existant_URL', 'Prendre la photo du site � exploiter': 'Prendre la photo du site � exploiter', 'Prendre la photo du site � exploiter_URL': 'Prendre la photo du site � exploiter_URL', 'Prendre les cordonn�es GPS': 'Prendre les cordonn�es GPS', '_Prendre les cordonn�es GPS_latitude': '_Prendre les cordonn�es GPS_latitude', '_Prendre les cordonn�es GPS_longitude': '_Prendre les cordonn�es GPS_longitude', '_Prendre les cordonn�es GPS_altitude': '_Prendre les cordonn�es GPS_altitude', '_Prendre les cordonn�es GPS_precision': '_Prendre les cordonn�es GPS_precision', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_status': '_status', '_submitted_by': '_submitted_by', '__version__': '__version__', '_tags': '_tags', '_index': '_index', });
lyr_RUYIGI_Gisunika_16.set('fieldAliases', {'Province': 'Province', 'Commune': 'Commune', 'Colline': 'Colline', 'Sous_Colline': 'Sous_Colline', 'date de collecte': 'date de collecte', 'Nom de l\'AEP': 'Nom de l\'AEP', 'Nom d\'ouvrage': 'Nom d\'ouvrage', 'Etat de mise en oeuvre de l\'ouvrage': 'Etat de mise en oeuvre de l\'ouvrage', 'Volume (m3)': 'Volume (m3)', 'Prendre la photo d\'ouvrages existant': 'Prendre la photo d\'ouvrages existant', 'Prendre la photo d\'ouvrages existant_URL': 'Prendre la photo d\'ouvrages existant_URL', 'Prendre la photo du site � exploiter': 'Prendre la photo du site � exploiter', 'Prendre la photo du site � exploiter_URL': 'Prendre la photo du site � exploiter_URL', 'Prendre les cordonn�es GPS': 'Prendre les cordonn�es GPS', '_Prendre les cordonn�es GPS_latitude': '_Prendre les cordonn�es GPS_latitude', '_Prendre les cordonn�es GPS_longitude': '_Prendre les cordonn�es GPS_longitude', '_Prendre les cordonn�es GPS_altitude': '_Prendre les cordonn�es GPS_altitude', '_Prendre les cordonn�es GPS_precision': '_Prendre les cordonn�es GPS_precision', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_status': '_status', '_submitted_by': '_submitted_by', '__version__': '__version__', '_tags': '_tags', '_index': '_index', });
lyr_RUYIGI_KanyenkandaMurehe_17.set('fieldAliases', {'Province': 'Province', 'Commune': 'Commune', 'Colline': 'Colline', 'Sous_Colline': 'Sous_Colline', 'date de collecte': 'date de collecte', 'Nom de l\'AEP': 'Nom de l\'AEP', 'Nom d\'ouvrage': 'Nom d\'ouvrage', 'Etat de mise en oeuvre de l\'ouvrage': 'Etat de mise en oeuvre de l\'ouvrage', 'Volume (m3)': 'Volume (m3)', 'Prendre la photo d\'ouvrages existant': 'Prendre la photo d\'ouvrages existant', 'Prendre la photo d\'ouvrages existant_URL': 'Prendre la photo d\'ouvrages existant_URL', 'Prendre la photo du site � exploiter': 'Prendre la photo du site � exploiter', 'Prendre la photo du site � exploiter_URL': 'Prendre la photo du site � exploiter_URL', 'Prendre les cordonn�es GPS': 'Prendre les cordonn�es GPS', '_Prendre les cordonn�es GPS_latitude': '_Prendre les cordonn�es GPS_latitude', '_Prendre les cordonn�es GPS_longitude': '_Prendre les cordonn�es GPS_longitude', '_Prendre les cordonn�es GPS_altitude': '_Prendre les cordonn�es GPS_altitude', '_Prendre les cordonn�es GPS_precision': '_Prendre les cordonn�es GPS_precision', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_status': '_status', '_submitted_by': '_submitted_by', '__version__': '__version__', '_tags': '_tags', '_index': '_index', });
lyr_RUYIGI_Kizige_18.set('fieldAliases', {'Province': 'Province', 'Commune': 'Commune', 'Colline': 'Colline', 'Sous_Colline': 'Sous_Colline', 'date de collecte': 'date de collecte', 'Nom de l\'AEP': 'Nom de l\'AEP', 'Nom d\'ouvrage': 'Nom d\'ouvrage', 'Etat de mise en oeuvre de l\'ouvrage': 'Etat de mise en oeuvre de l\'ouvrage', 'Volume (m3)': 'Volume (m3)', 'Prendre la photo d\'ouvrages existant': 'Prendre la photo d\'ouvrages existant', 'Prendre la photo d\'ouvrages existant_URL': 'Prendre la photo d\'ouvrages existant_URL', 'Prendre la photo du site � exploiter': 'Prendre la photo du site � exploiter', 'Prendre la photo du site � exploiter_URL': 'Prendre la photo du site � exploiter_URL', 'Prendre les cordonn�es GPS': 'Prendre les cordonn�es GPS', '_Prendre les cordonn�es GPS_latitude': '_Prendre les cordonn�es GPS_latitude', '_Prendre les cordonn�es GPS_longitude': '_Prendre les cordonn�es GPS_longitude', '_Prendre les cordonn�es GPS_altitude': '_Prendre les cordonn�es GPS_altitude', '_Prendre les cordonn�es GPS_precision': '_Prendre les cordonn�es GPS_precision', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_status': '_status', '_submitted_by': '_submitted_by', '__version__': '__version__', '_tags': '_tags', '_index': '_index', });
lyr_RUYIGI_Mubavu_19.set('fieldAliases', {'Province': 'Province', 'Commune': 'Commune', 'Colline': 'Colline', 'Sous_Colline': 'Sous_Colline', 'date de collecte': 'date de collecte', 'Nom de l\'AEP': 'Nom de l\'AEP', 'Nom d\'ouvrage': 'Nom d\'ouvrage', 'Etat de mise en oeuvre de l\'ouvrage': 'Etat de mise en oeuvre de l\'ouvrage', 'Volume (m3)': 'Volume (m3)', 'Prendre la photo d\'ouvrages existant': 'Prendre la photo d\'ouvrages existant', 'Prendre la photo d\'ouvrages existant_URL': 'Prendre la photo d\'ouvrages existant_URL', 'Prendre la photo du site � exploiter': 'Prendre la photo du site � exploiter', 'Prendre la photo du site � exploiter_URL': 'Prendre la photo du site � exploiter_URL', 'Prendre les cordonn�es GPS': 'Prendre les cordonn�es GPS', '_Prendre les cordonn�es GPS_latitude': '_Prendre les cordonn�es GPS_latitude', '_Prendre les cordonn�es GPS_longitude': '_Prendre les cordonn�es GPS_longitude', '_Prendre les cordonn�es GPS_altitude': '_Prendre les cordonn�es GPS_altitude', '_Prendre les cordonn�es GPS_precision': '_Prendre les cordonn�es GPS_precision', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_status': '_status', '_submitted_by': '_submitted_by', '__version__': '__version__', '_tags': '_tags', '_index': '_index', });
lyr_RUYIGI_Musenga_Bartye_20.set('fieldAliases', {'Province': 'Province', 'Commune': 'Commune', 'Colline': 'Colline', 'Sous_Colline': 'Sous_Colline', 'date de collecte': 'date de collecte', 'Nom de l\'AEP': 'Nom de l\'AEP', 'Nom d\'ouvrage': 'Nom d\'ouvrage', 'Etat de mise en oeuvre de l\'ouvrage': 'Etat de mise en oeuvre de l\'ouvrage', 'Volume (m3)': 'Volume (m3)', 'Prendre la photo d\'ouvrages existant': 'Prendre la photo d\'ouvrages existant', 'Prendre la photo d\'ouvrages existant_URL': 'Prendre la photo d\'ouvrages existant_URL', 'Prendre la photo du site � exploiter': 'Prendre la photo du site � exploiter', 'Prendre la photo du site � exploiter_URL': 'Prendre la photo du site � exploiter_URL', 'Prendre les cordonn�es GPS': 'Prendre les cordonn�es GPS', '_Prendre les cordonn�es GPS_latitude': '_Prendre les cordonn�es GPS_latitude', '_Prendre les cordonn�es GPS_longitude': '_Prendre les cordonn�es GPS_longitude', '_Prendre les cordonn�es GPS_altitude': '_Prendre les cordonn�es GPS_altitude', '_Prendre les cordonn�es GPS_precision': '_Prendre les cordonn�es GPS_precision', '_id': '_id', '_uuid': '_uuid', '_submission_time': '_submission_time', '_status': '_status', '_submitted_by': '_submitted_by', '__version__': '__version__', '_tags': '_tags', '_index': '_index', });
lyr_DESCRIPTIONDELAEP_21.set('fieldAliases', {'Nom de l\'AEP': 'Nom de l\'AEP', 'Province': 'Province', 'Commune': 'Commune', 'Colline': 'Colline', 'Sous_Colline': 'Sous_Colline', 'Etat de mise en oeuvre de l\'AEP': 'Etat de mise en oeuvre de l\'AEP', 'Lin�aire (km)': 'Lin�aire (km)', 'D�bit  (l/S�c)': 'D�bit  (l/S�c)', 'Dotation d�bit (l/S�c)': 'Dotation d�bit (l/S�c)', 'B�n�ficiaires': 'B�n�ficiaires', 'Nom de(s) colline(s) en amont': 'Nom de(s) colline(s) en amont', 'Nom de(s) colline(s) en aval': 'Nom de(s) colline(s) en aval', 'Nom des collines desservies': 'Nom des collines desservies', 'Prendre la photo d\'ouvrages existant': 'Prendre la photo d\'ouvrages existant', 'Prendre la photo d\'ouvrages existant_URL': 'Prendre la photo d\'ouvrages existant_URL', 'Prendre la photo du site � exploiter': 'Prendre la photo du site � exploiter', 'Prendre la photo du site � exploiter_URL': 'Prendre la photo du site � exploiter_URL', 'Prendre les cordonn�es GPS': 'Prendre les cordonn�es GPS', '_Prendre les cordonn�es GPS_latitude': '_Prendre les cordonn�es GPS_latitude', '_Prendre les cordonn�es GPS_longitude': '_Prendre les cordonn�es GPS_longitude', '_Prendre les cordonn�es GPS_altitude': '_Prendre les cordonn�es GPS_altitude', '_Prendre les cordonn�es GPS_precision': '_Prendre les cordonn�es GPS_precision', });
lyr_BDI_adm2_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_BDI_adm1_2.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', });
lyr_BLocs_des_latrines_4.set('fieldImages', {'Province': 'TextEdit', 'Commune': 'TextEdit', 'Colline': 'TextEdit', 'Nom d\'�tablissement': 'TextEdit', 'Nbre de Garcon': 'TextEdit', 'Nbre de fille': 'TextEdit', 'Nombre de Blocs': 'TextEdit', 'Nombre des portes': 'TextEdit', 'Prendre la photo du site � exploiter': 'TextEdit', 'Prendre la photo du site � exploiter_URL': 'TextEdit', 'Prendre les cordonn�es GPS': 'TextEdit', '_Prendre les cordonn�es GPS_latitude': 'TextEdit', '_Prendre les cordonn�es GPS_longitude': 'TextEdit', '_Prendre les cordonn�es GPS_altitude': 'TextEdit', '_Prendre les cordonn�es GPS_precision': 'TextEdit', });
lyr_CANKUZOMatyazoKigamba_5.set('fieldImages', {'Province': '', 'Commune': '', 'Colline': '', 'Sous_Colline': '', 'date de collecte': '', 'Nom de l\'AEP': '', 'Nom d\'ouvrage': '', 'Etat de mise en oeuvre de l\'ouvrage': '', 'Volume (m3)': '', 'Prendre la photo d\'ouvrages existant': '', 'Prendre la photo d\'ouvrages existant_URL': '', 'Prendre la photo du site � exploiter': '', 'Prendre la photo du site � exploiter_URL': '', 'Prendre les cordonn�es GPS': '', '_Prendre les cordonn�es GPS_latitude': '', '_Prendre les cordonn�es GPS_longitude': '', '_Prendre les cordonn�es GPS_altitude': '', '_Prendre les cordonn�es GPS_precision': '', '_id': '', '_uuid': '', '_submission_time': '', '_status': '', '_submitted_by': '', '__version__': '', '_tags': '', '_index': '', });
lyr_CANKUZO_Gasarasi_6.set('fieldImages', {'Province': '', 'Commune': '', 'Colline': '', 'Sous_Colline': '', 'date de collecte': '', 'Nom de l\'AEP': '', 'Nom d\'ouvrage': '', 'Etat de mise en oeuvre de l\'ouvrage': '', 'Volume (m3)': '', 'Prendre la photo d\'ouvrages existant': '', 'Prendre la photo d\'ouvrages existant_URL': '', 'Prendre la photo du site � exploiter': '', 'Prendre la photo du site � exploiter_URL': '', 'Prendre les cordonn�es GPS': '', '_Prendre les cordonn�es GPS_latitude': '', '_Prendre les cordonn�es GPS_longitude': '', '_Prendre les cordonn�es GPS_altitude': '', '_Prendre les cordonn�es GPS_precision': '', '_id': '', '_uuid': '', '_submission_time': '', '_status': '', '_submitted_by': '', '__version__': '', '_tags': '', '_index': '', });
lyr_CANKUZO_Mugozi_Cankuzo_7.set('fieldImages', {'Province': '', 'Commune': '', 'Colline': '', 'Sous_Colline': '', 'date de collecte': '', 'Nom de l\'AEP': '', 'Nom d\'ouvrage': '', 'Etat de mise en oeuvre de l\'ouvrage': '', 'Volume (m3)': '', 'Prendre la photo d\'ouvrages existant': '', 'Prendre la photo d\'ouvrages existant_URL': '', 'Prendre la photo du site � exploiter': '', 'Prendre la photo du site � exploiter_URL': '', 'Prendre les cordonn�es GPS': '', '_Prendre les cordonn�es GPS_latitude': '', '_Prendre les cordonn�es GPS_longitude': '', '_Prendre les cordonn�es GPS_altitude': '', '_Prendre les cordonn�es GPS_precision': '', '_id': '', '_uuid': '', '_submission_time': '', '_status': '', '_submitted_by': '', '__version__': '', '_tags': '', '_index': '', });
lyr_CANKUZO_Rutoke_8.set('fieldImages', {'Province': '', 'Commune': '', 'Colline': '', 'Sous_Colline': '', 'date de collecte': '', 'Nom de l\'AEP': '', 'Nom d\'ouvrage': '', 'Etat de mise en oeuvre de l\'ouvrage': '', 'Volume (m3)': '', 'Prendre la photo d\'ouvrages existant': '', 'Prendre la photo d\'ouvrages existant_URL': '', 'Prendre la photo du site � exploiter': '', 'Prendre la photo du site � exploiter_URL': '', 'Prendre les cordonn�es GPS': '', '_Prendre les cordonn�es GPS_latitude': '', '_Prendre les cordonn�es GPS_longitude': '', '_Prendre les cordonn�es GPS_altitude': '', '_Prendre les cordonn�es GPS_precision': '', '_id': '', '_uuid': '', '_submission_time': '', '_status': '', '_submitted_by': '', '__version__': '', '_tags': '', '_index': '', });
lyr_CIBITOKE_KabungubunguKabuyeNdava_9.set('fieldImages', {'Province': '', 'Commune': '', 'Colline': '', 'Sous_Colline': '', 'date de collecte': '', 'Nom de l\'AEP': '', 'Nom d\'ouvrage': '', 'Etat de mise en oeuvre de l\'ouvrage': '', 'Volume (m3)': '', 'Prendre la photo d\'ouvrages existant': '', 'Prendre la photo d\'ouvrages existant_URL': '', 'Prendre la photo du site � exploiter': '', 'Prendre la photo du site � exploiter_URL': '', 'Prendre les cordonn�es GPS': '', '_Prendre les cordonn�es GPS_latitude': '', '_Prendre les cordonn�es GPS_longitude': '', '_Prendre les cordonn�es GPS_altitude': '', '_Prendre les cordonn�es GPS_precision': '', '_id': '', '_uuid': '', '_submission_time': '', '_status': '', '_submitted_by': '', '__version__': '', '_tags': '', '_index': '', });
lyr_CIBITOKE_Ruhwa_Mparambo_10.set('fieldImages', {'Province': '', 'Commune': '', 'Colline': '', 'Sous_Colline': '', 'date de collecte': '', 'Nom de l\'AEP': '', 'Nom d\'ouvrage': '', 'Etat de mise en oeuvre de l\'ouvrage': '', 'Volume (m3)': '', 'Prendre la photo d\'ouvrages existant': '', 'Prendre la photo d\'ouvrages existant_URL': '', 'Prendre la photo du site � exploiter': '', 'Prendre la photo du site � exploiter_URL': '', 'Prendre les cordonn�es GPS': '', '_Prendre les cordonn�es GPS_latitude': '', '_Prendre les cordonn�es GPS_longitude': '', '_Prendre les cordonn�es GPS_altitude': '', '_Prendre les cordonn�es GPS_precision': '', '_id': '', '_uuid': '', '_submission_time': '', '_status': '', '_submitted_by': '', '__version__': '', '_tags': '', '_index': '', });
lyr_BUBANZA_NyakabandaKagwemaII_11.set('fieldImages', {'Province': '', 'Commune': '', 'Colline': '', 'Sous_Colline': '', 'date de collecte': '', 'Nom de l\'AEP': '', 'Nom d\'ouvrage': '', 'Etat de mise en oeuvre de l\'ouvrage': '', 'Volume (m3)': '', 'Prendre la photo d\'ouvrages existant': '', 'Prendre la photo d\'ouvrages existant_URL': '', 'Prendre la photo du site � exploiter': '', 'Prendre la photo du site � exploiter_URL': '', 'Prendre les cordonn�es GPS': '', '_Prendre les cordonn�es GPS_latitude': '', '_Prendre les cordonn�es GPS_longitude': '', '_Prendre les cordonn�es GPS_altitude': '', '_Prendre les cordonn�es GPS_precision': '', '_id': '', '_uuid': '', '_submission_time': '', '_status': '', '_submitted_by': '', '__version__': '', '_tags': '', '_index': '', });
lyr_RUTANA_Gakwende_12.set('fieldImages', {'Province': '', 'Commune': '', 'Colline': '', 'Sous_Colline': '', 'date de collecte': '', 'Nom de l\'AEP': '', 'Nom d\'ouvrage': '', 'Etat de mise en oeuvre de l\'ouvrage': '', 'Volume (m3)': '', 'Prendre la photo d\'ouvrages existant': '', 'Prendre la photo d\'ouvrages existant_URL': '', 'Prendre la photo du site � exploiter': '', 'Prendre la photo du site � exploiter_URL': '', 'Prendre les cordonn�es GPS': '', '_Prendre les cordonn�es GPS_latitude': '', '_Prendre les cordonn�es GPS_longitude': '', '_Prendre les cordonn�es GPS_altitude': '', '_Prendre les cordonn�es GPS_precision': '', '_id': '', '_uuid': '', '_submission_time': '', '_status': '', '_submitted_by': '', '__version__': '', '_tags': '', '_index': '', });
lyr_RUTANA_KangoziMusongati_13.set('fieldImages', {'Province': '', 'Commune': '', 'Colline': '', 'Sous_Colline': '', 'date de collecte': '', 'Nom de l\'AEP': '', 'Nom d\'ouvrage': '', 'Etat de mise en oeuvre de l\'ouvrage': '', 'Volume (m3)': '', 'Prendre la photo d\'ouvrages existant': '', 'Prendre la photo d\'ouvrages existant_URL': '', 'Prendre la photo du site � exploiter': '', 'Prendre la photo du site � exploiter_URL': '', 'Prendre les cordonn�es GPS': '', '_Prendre les cordonn�es GPS_latitude': '', '_Prendre les cordonn�es GPS_longitude': '', '_Prendre les cordonn�es GPS_altitude': '', '_Prendre les cordonn�es GPS_precision': '', '_id': '', '_uuid': '', '_submission_time': '', '_status': '', '_submitted_by': '', '__version__': '', '_tags': '', '_index': '', });
lyr_RUYIGI_GakungweI_14.set('fieldImages', {'Province': '', 'Commune': '', 'Colline': '', 'Sous_Colline': '', 'date de collecte': '', 'Nom de l\'AEP': '', 'Nom d\'ouvrage': '', 'Etat de mise en oeuvre de l\'ouvrage': '', 'Volume (m3)': '', 'Prendre la photo d\'ouvrages existant': '', 'Prendre la photo d\'ouvrages existant_URL': '', 'Prendre la photo du site � exploiter': '', 'Prendre la photo du site � exploiter_URL': '', 'Prendre les cordonn�es GPS': '', '_Prendre les cordonn�es GPS_latitude': '', '_Prendre les cordonn�es GPS_longitude': '', '_Prendre les cordonn�es GPS_altitude': '', '_Prendre les cordonn�es GPS_precision': '', '_id': '', '_uuid': '', '_submission_time': '', '_status': '', '_submitted_by': '', '__version__': '', '_tags': '', '_index': '', });
lyr_RUYIGI_GakungweII_15.set('fieldImages', {'Province': '', 'Commune': '', 'Colline': '', 'Sous_Colline': '', 'date de collecte': '', 'Nom de l\'AEP': '', 'Nom d\'ouvrage': '', 'Etat de mise en oeuvre de l\'ouvrage': '', 'Volume (m3)': '', 'Prendre la photo d\'ouvrages existant': '', 'Prendre la photo d\'ouvrages existant_URL': '', 'Prendre la photo du site � exploiter': '', 'Prendre la photo du site � exploiter_URL': '', 'Prendre les cordonn�es GPS': '', '_Prendre les cordonn�es GPS_latitude': '', '_Prendre les cordonn�es GPS_longitude': '', '_Prendre les cordonn�es GPS_altitude': '', '_Prendre les cordonn�es GPS_precision': '', '_id': '', '_uuid': '', '_submission_time': '', '_status': '', '_submitted_by': '', '__version__': '', '_tags': '', '_index': '', });
lyr_RUYIGI_Gisunika_16.set('fieldImages', {'Province': '', 'Commune': '', 'Colline': '', 'Sous_Colline': '', 'date de collecte': '', 'Nom de l\'AEP': '', 'Nom d\'ouvrage': '', 'Etat de mise en oeuvre de l\'ouvrage': '', 'Volume (m3)': '', 'Prendre la photo d\'ouvrages existant': '', 'Prendre la photo d\'ouvrages existant_URL': '', 'Prendre la photo du site � exploiter': '', 'Prendre la photo du site � exploiter_URL': '', 'Prendre les cordonn�es GPS': '', '_Prendre les cordonn�es GPS_latitude': '', '_Prendre les cordonn�es GPS_longitude': '', '_Prendre les cordonn�es GPS_altitude': '', '_Prendre les cordonn�es GPS_precision': '', '_id': '', '_uuid': '', '_submission_time': '', '_status': '', '_submitted_by': '', '__version__': '', '_tags': '', '_index': '', });
lyr_RUYIGI_KanyenkandaMurehe_17.set('fieldImages', {'Province': '', 'Commune': '', 'Colline': '', 'Sous_Colline': '', 'date de collecte': '', 'Nom de l\'AEP': '', 'Nom d\'ouvrage': '', 'Etat de mise en oeuvre de l\'ouvrage': '', 'Volume (m3)': '', 'Prendre la photo d\'ouvrages existant': '', 'Prendre la photo d\'ouvrages existant_URL': '', 'Prendre la photo du site � exploiter': '', 'Prendre la photo du site � exploiter_URL': '', 'Prendre les cordonn�es GPS': '', '_Prendre les cordonn�es GPS_latitude': '', '_Prendre les cordonn�es GPS_longitude': '', '_Prendre les cordonn�es GPS_altitude': '', '_Prendre les cordonn�es GPS_precision': '', '_id': '', '_uuid': '', '_submission_time': '', '_status': '', '_submitted_by': '', '__version__': '', '_tags': '', '_index': '', });
lyr_RUYIGI_Kizige_18.set('fieldImages', {'Province': '', 'Commune': '', 'Colline': '', 'Sous_Colline': '', 'date de collecte': '', 'Nom de l\'AEP': '', 'Nom d\'ouvrage': '', 'Etat de mise en oeuvre de l\'ouvrage': '', 'Volume (m3)': '', 'Prendre la photo d\'ouvrages existant': '', 'Prendre la photo d\'ouvrages existant_URL': '', 'Prendre la photo du site � exploiter': '', 'Prendre la photo du site � exploiter_URL': '', 'Prendre les cordonn�es GPS': '', '_Prendre les cordonn�es GPS_latitude': '', '_Prendre les cordonn�es GPS_longitude': '', '_Prendre les cordonn�es GPS_altitude': '', '_Prendre les cordonn�es GPS_precision': '', '_id': '', '_uuid': '', '_submission_time': '', '_status': '', '_submitted_by': '', '__version__': '', '_tags': '', '_index': '', });
lyr_RUYIGI_Mubavu_19.set('fieldImages', {'Province': '', 'Commune': '', 'Colline': '', 'Sous_Colline': '', 'date de collecte': '', 'Nom de l\'AEP': '', 'Nom d\'ouvrage': '', 'Etat de mise en oeuvre de l\'ouvrage': '', 'Volume (m3)': '', 'Prendre la photo d\'ouvrages existant': '', 'Prendre la photo d\'ouvrages existant_URL': '', 'Prendre la photo du site � exploiter': '', 'Prendre la photo du site � exploiter_URL': '', 'Prendre les cordonn�es GPS': '', '_Prendre les cordonn�es GPS_latitude': '', '_Prendre les cordonn�es GPS_longitude': '', '_Prendre les cordonn�es GPS_altitude': '', '_Prendre les cordonn�es GPS_precision': '', '_id': '', '_uuid': '', '_submission_time': '', '_status': '', '_submitted_by': '', '__version__': '', '_tags': '', '_index': '', });
lyr_RUYIGI_Musenga_Bartye_20.set('fieldImages', {'Province': '', 'Commune': '', 'Colline': '', 'Sous_Colline': '', 'date de collecte': '', 'Nom de l\'AEP': '', 'Nom d\'ouvrage': '', 'Etat de mise en oeuvre de l\'ouvrage': '', 'Volume (m3)': '', 'Prendre la photo d\'ouvrages existant': '', 'Prendre la photo d\'ouvrages existant_URL': '', 'Prendre la photo du site � exploiter': '', 'Prendre la photo du site � exploiter_URL': '', 'Prendre les cordonn�es GPS': '', '_Prendre les cordonn�es GPS_latitude': '', '_Prendre les cordonn�es GPS_longitude': '', '_Prendre les cordonn�es GPS_altitude': '', '_Prendre les cordonn�es GPS_precision': '', '_id': '', '_uuid': '', '_submission_time': '', '_status': '', '_submitted_by': '', '__version__': '', '_tags': '', '_index': '', });
lyr_DESCRIPTIONDELAEP_21.set('fieldImages', {'Nom de l\'AEP': 'TextEdit', 'Province': 'TextEdit', 'Commune': 'TextEdit', 'Colline': 'TextEdit', 'Sous_Colline': 'TextEdit', 'Etat de mise en oeuvre de l\'AEP': 'TextEdit', 'Lin�aire (km)': 'TextEdit', 'D�bit  (l/S�c)': 'TextEdit', 'Dotation d�bit (l/S�c)': 'TextEdit', 'B�n�ficiaires': 'TextEdit', 'Nom de(s) colline(s) en amont': 'TextEdit', 'Nom de(s) colline(s) en aval': 'TextEdit', 'Nom des collines desservies': 'TextEdit', 'Prendre la photo d\'ouvrages existant': 'TextEdit', 'Prendre la photo d\'ouvrages existant_URL': 'TextEdit', 'Prendre la photo du site � exploiter': 'TextEdit', 'Prendre la photo du site � exploiter_URL': 'TextEdit', 'Prendre les cordonn�es GPS': 'TextEdit', '_Prendre les cordonn�es GPS_latitude': 'TextEdit', '_Prendre les cordonn�es GPS_longitude': 'TextEdit', '_Prendre les cordonn�es GPS_altitude': 'TextEdit', '_Prendre les cordonn�es GPS_precision': 'TextEdit', });
lyr_BDI_adm2_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_BDI_adm1_2.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_BLocs_des_latrines_4.set('fieldLabels', {'Province': 'header label - always visible', 'Commune': 'header label - always visible', 'Colline': 'header label - always visible', 'Nom d\'�tablissement': 'header label - always visible', 'Nbre de Garcon': 'header label - always visible', 'Nbre de fille': 'header label - always visible', 'Nombre de Blocs': 'header label - always visible', 'Nombre des portes': 'header label - always visible', 'Prendre la photo du site � exploiter': 'no label', 'Prendre la photo du site � exploiter_URL': 'no label', 'Prendre les cordonn�es GPS': 'no label', '_Prendre les cordonn�es GPS_latitude': 'no label', '_Prendre les cordonn�es GPS_longitude': 'no label', '_Prendre les cordonn�es GPS_altitude': 'no label', '_Prendre les cordonn�es GPS_precision': 'no label', });
lyr_CANKUZOMatyazoKigamba_5.set('fieldLabels', {'Province': 'header label - always visible', 'Commune': 'header label - always visible', 'Colline': 'header label - always visible', 'Sous_Colline': 'header label - always visible', 'date de collecte': 'no label', 'Nom de l\'AEP': 'header label - always visible', 'Nom d\'ouvrage': 'header label - always visible', 'Etat de mise en oeuvre de l\'ouvrage': 'header label - always visible', 'Volume (m3)': 'header label - always visible', 'Prendre la photo d\'ouvrages existant': 'no label', 'Prendre la photo d\'ouvrages existant_URL': 'no label', 'Prendre la photo du site � exploiter': 'no label', 'Prendre la photo du site � exploiter_URL': 'no label', 'Prendre les cordonn�es GPS': 'no label', '_Prendre les cordonn�es GPS_latitude': 'no label', '_Prendre les cordonn�es GPS_longitude': 'no label', '_Prendre les cordonn�es GPS_altitude': 'no label', '_Prendre les cordonn�es GPS_precision': 'no label', '_id': 'no label', '_uuid': 'no label', '_submission_time': 'no label', '_status': 'no label', '_submitted_by': 'no label', '__version__': 'no label', '_tags': 'no label', '_index': 'no label', });
lyr_CANKUZO_Gasarasi_6.set('fieldLabels', {'Province': 'header label - always visible', 'Commune': 'header label - always visible', 'Colline': 'header label - always visible', 'Sous_Colline': 'header label - always visible', 'date de collecte': 'no label', 'Nom de l\'AEP': 'header label - always visible', 'Nom d\'ouvrage': 'header label - always visible', 'Etat de mise en oeuvre de l\'ouvrage': 'header label - always visible', 'Volume (m3)': 'header label - always visible', 'Prendre la photo d\'ouvrages existant': 'no label', 'Prendre la photo d\'ouvrages existant_URL': 'no label', 'Prendre la photo du site � exploiter': 'no label', 'Prendre la photo du site � exploiter_URL': 'no label', 'Prendre les cordonn�es GPS': 'no label', '_Prendre les cordonn�es GPS_latitude': 'no label', '_Prendre les cordonn�es GPS_longitude': 'no label', '_Prendre les cordonn�es GPS_altitude': 'no label', '_Prendre les cordonn�es GPS_precision': 'no label', '_id': 'no label', '_uuid': 'no label', '_submission_time': 'no label', '_status': 'no label', '_submitted_by': 'no label', '__version__': 'no label', '_tags': 'no label', '_index': 'no label', });
lyr_CANKUZO_Mugozi_Cankuzo_7.set('fieldLabels', {'Province': 'header label - always visible', 'Commune': 'header label - always visible', 'Colline': 'header label - always visible', 'Sous_Colline': 'header label - always visible', 'date de collecte': 'no label', 'Nom de l\'AEP': 'header label - always visible', 'Nom d\'ouvrage': 'header label - always visible', 'Etat de mise en oeuvre de l\'ouvrage': 'header label - always visible', 'Volume (m3)': 'header label - always visible', 'Prendre la photo d\'ouvrages existant': 'no label', 'Prendre la photo d\'ouvrages existant_URL': 'no label', 'Prendre la photo du site � exploiter': 'no label', 'Prendre la photo du site � exploiter_URL': 'no label', 'Prendre les cordonn�es GPS': 'no label', '_Prendre les cordonn�es GPS_latitude': 'no label', '_Prendre les cordonn�es GPS_longitude': 'no label', '_Prendre les cordonn�es GPS_altitude': 'no label', '_Prendre les cordonn�es GPS_precision': 'no label', '_id': 'no label', '_uuid': 'no label', '_submission_time': 'no label', '_status': 'no label', '_submitted_by': 'no label', '__version__': 'no label', '_tags': 'no label', '_index': 'no label', });
lyr_CANKUZO_Rutoke_8.set('fieldLabels', {'Province': 'header label - always visible', 'Commune': 'header label - always visible', 'Colline': 'header label - always visible', 'Sous_Colline': 'header label - always visible', 'date de collecte': 'no label', 'Nom de l\'AEP': 'header label - always visible', 'Nom d\'ouvrage': 'header label - always visible', 'Etat de mise en oeuvre de l\'ouvrage': 'header label - always visible', 'Volume (m3)': 'header label - always visible', 'Prendre la photo d\'ouvrages existant': 'no label', 'Prendre la photo d\'ouvrages existant_URL': 'no label', 'Prendre la photo du site � exploiter': 'no label', 'Prendre la photo du site � exploiter_URL': 'no label', 'Prendre les cordonn�es GPS': 'no label', '_Prendre les cordonn�es GPS_latitude': 'no label', '_Prendre les cordonn�es GPS_longitude': 'no label', '_Prendre les cordonn�es GPS_altitude': 'no label', '_Prendre les cordonn�es GPS_precision': 'no label', '_id': 'no label', '_uuid': 'no label', '_submission_time': 'no label', '_status': 'no label', '_submitted_by': 'no label', '__version__': 'no label', '_tags': 'no label', '_index': 'no label', });
lyr_CIBITOKE_KabungubunguKabuyeNdava_9.set('fieldLabels', {'Province': 'header label - always visible', 'Commune': 'header label - always visible', 'Colline': 'header label - always visible', 'Sous_Colline': 'header label - always visible', 'date de collecte': 'no label', 'Nom de l\'AEP': 'header label - always visible', 'Nom d\'ouvrage': 'header label - always visible', 'Etat de mise en oeuvre de l\'ouvrage': 'header label - always visible', 'Volume (m3)': 'header label - always visible', 'Prendre la photo d\'ouvrages existant': 'no label', 'Prendre la photo d\'ouvrages existant_URL': 'no label', 'Prendre la photo du site � exploiter': 'no label', 'Prendre la photo du site � exploiter_URL': 'no label', 'Prendre les cordonn�es GPS': 'no label', '_Prendre les cordonn�es GPS_latitude': 'no label', '_Prendre les cordonn�es GPS_longitude': 'no label', '_Prendre les cordonn�es GPS_altitude': 'no label', '_Prendre les cordonn�es GPS_precision': 'no label', '_id': 'no label', '_uuid': 'no label', '_submission_time': 'no label', '_status': 'no label', '_submitted_by': 'no label', '__version__': 'no label', '_tags': 'no label', '_index': 'no label', });
lyr_CIBITOKE_Ruhwa_Mparambo_10.set('fieldLabels', {'Province': 'header label - always visible', 'Commune': 'header label - always visible', 'Colline': 'header label - always visible', 'Sous_Colline': 'header label - always visible', 'date de collecte': 'no label', 'Nom de l\'AEP': 'header label - always visible', 'Nom d\'ouvrage': 'header label - always visible', 'Etat de mise en oeuvre de l\'ouvrage': 'header label - always visible', 'Volume (m3)': 'header label - always visible', 'Prendre la photo d\'ouvrages existant': 'no label', 'Prendre la photo d\'ouvrages existant_URL': 'no label', 'Prendre la photo du site � exploiter': 'no label', 'Prendre la photo du site � exploiter_URL': 'no label', 'Prendre les cordonn�es GPS': 'no label', '_Prendre les cordonn�es GPS_latitude': 'no label', '_Prendre les cordonn�es GPS_longitude': 'no label', '_Prendre les cordonn�es GPS_altitude': 'no label', '_Prendre les cordonn�es GPS_precision': 'no label', '_id': 'no label', '_uuid': 'no label', '_submission_time': 'no label', '_status': 'no label', '_submitted_by': 'no label', '__version__': 'no label', '_tags': 'no label', '_index': 'no label', });
lyr_BUBANZA_NyakabandaKagwemaII_11.set('fieldLabels', {'Province': 'header label - always visible', 'Commune': 'header label - always visible', 'Colline': 'header label - always visible', 'Sous_Colline': 'header label - always visible', 'date de collecte': 'no label', 'Nom de l\'AEP': 'header label - always visible', 'Nom d\'ouvrage': 'header label - always visible', 'Etat de mise en oeuvre de l\'ouvrage': 'header label - always visible', 'Volume (m3)': 'header label - always visible', 'Prendre la photo d\'ouvrages existant': 'no label', 'Prendre la photo d\'ouvrages existant_URL': 'no label', 'Prendre la photo du site � exploiter': 'no label', 'Prendre la photo du site � exploiter_URL': 'no label', 'Prendre les cordonn�es GPS': 'no label', '_Prendre les cordonn�es GPS_latitude': 'no label', '_Prendre les cordonn�es GPS_longitude': 'no label', '_Prendre les cordonn�es GPS_altitude': 'no label', '_Prendre les cordonn�es GPS_precision': 'no label', '_id': 'no label', '_uuid': 'no label', '_submission_time': 'no label', '_status': 'no label', '_submitted_by': 'no label', '__version__': 'no label', '_tags': 'no label', '_index': 'no label', });
lyr_RUTANA_Gakwende_12.set('fieldLabels', {'Province': 'header label - always visible', 'Commune': 'header label - always visible', 'Colline': 'header label - always visible', 'Sous_Colline': 'header label - always visible', 'date de collecte': 'no label', 'Nom de l\'AEP': 'header label - always visible', 'Nom d\'ouvrage': 'header label - always visible', 'Etat de mise en oeuvre de l\'ouvrage': 'header label - always visible', 'Volume (m3)': 'header label - always visible', 'Prendre la photo d\'ouvrages existant': 'no label', 'Prendre la photo d\'ouvrages existant_URL': 'no label', 'Prendre la photo du site � exploiter': 'no label', 'Prendre la photo du site � exploiter_URL': 'no label', 'Prendre les cordonn�es GPS': 'no label', '_Prendre les cordonn�es GPS_latitude': 'no label', '_Prendre les cordonn�es GPS_longitude': 'no label', '_Prendre les cordonn�es GPS_altitude': 'no label', '_Prendre les cordonn�es GPS_precision': 'no label', '_id': 'no label', '_uuid': 'no label', '_submission_time': 'no label', '_status': 'no label', '_submitted_by': 'no label', '__version__': 'no label', '_tags': 'no label', '_index': 'no label', });
lyr_RUTANA_KangoziMusongati_13.set('fieldLabels', {'Province': 'header label - always visible', 'Commune': 'header label - always visible', 'Colline': 'header label - always visible', 'Sous_Colline': 'header label - always visible', 'date de collecte': 'no label', 'Nom de l\'AEP': 'header label - always visible', 'Nom d\'ouvrage': 'header label - always visible', 'Etat de mise en oeuvre de l\'ouvrage': 'header label - always visible', 'Volume (m3)': 'header label - always visible', 'Prendre la photo d\'ouvrages existant': 'no label', 'Prendre la photo d\'ouvrages existant_URL': 'no label', 'Prendre la photo du site � exploiter': 'no label', 'Prendre la photo du site � exploiter_URL': 'no label', 'Prendre les cordonn�es GPS': 'no label', '_Prendre les cordonn�es GPS_latitude': 'no label', '_Prendre les cordonn�es GPS_longitude': 'no label', '_Prendre les cordonn�es GPS_altitude': 'no label', '_Prendre les cordonn�es GPS_precision': 'no label', '_id': 'no label', '_uuid': 'no label', '_submission_time': 'no label', '_status': 'no label', '_submitted_by': 'no label', '__version__': 'no label', '_tags': 'no label', '_index': 'no label', });
lyr_RUYIGI_GakungweI_14.set('fieldLabels', {'Province': 'header label - always visible', 'Commune': 'header label - always visible', 'Colline': 'header label - always visible', 'Sous_Colline': 'header label - always visible', 'date de collecte': 'no label', 'Nom de l\'AEP': 'header label - always visible', 'Nom d\'ouvrage': 'header label - always visible', 'Etat de mise en oeuvre de l\'ouvrage': 'header label - always visible', 'Volume (m3)': 'header label - always visible', 'Prendre la photo d\'ouvrages existant': 'no label', 'Prendre la photo d\'ouvrages existant_URL': 'no label', 'Prendre la photo du site � exploiter': 'no label', 'Prendre la photo du site � exploiter_URL': 'no label', 'Prendre les cordonn�es GPS': 'no label', '_Prendre les cordonn�es GPS_latitude': 'no label', '_Prendre les cordonn�es GPS_longitude': 'no label', '_Prendre les cordonn�es GPS_altitude': 'no label', '_Prendre les cordonn�es GPS_precision': 'no label', '_id': 'no label', '_uuid': 'no label', '_submission_time': 'no label', '_status': 'no label', '_submitted_by': 'no label', '__version__': 'no label', '_tags': 'no label', '_index': 'no label', });
lyr_RUYIGI_GakungweII_15.set('fieldLabels', {'Province': 'header label - always visible', 'Commune': 'header label - always visible', 'Colline': 'header label - always visible', 'Sous_Colline': 'header label - always visible', 'date de collecte': 'no label', 'Nom de l\'AEP': 'header label - always visible', 'Nom d\'ouvrage': 'header label - always visible', 'Etat de mise en oeuvre de l\'ouvrage': 'header label - always visible', 'Volume (m3)': 'header label - always visible', 'Prendre la photo d\'ouvrages existant': 'no label', 'Prendre la photo d\'ouvrages existant_URL': 'no label', 'Prendre la photo du site � exploiter': 'no label', 'Prendre la photo du site � exploiter_URL': 'no label', 'Prendre les cordonn�es GPS': 'no label', '_Prendre les cordonn�es GPS_latitude': 'no label', '_Prendre les cordonn�es GPS_longitude': 'no label', '_Prendre les cordonn�es GPS_altitude': 'no label', '_Prendre les cordonn�es GPS_precision': 'no label', '_id': 'no label', '_uuid': 'no label', '_submission_time': 'no label', '_status': 'no label', '_submitted_by': 'no label', '__version__': 'no label', '_tags': 'no label', '_index': 'no label', });
lyr_RUYIGI_Gisunika_16.set('fieldLabels', {'Province': 'header label - always visible', 'Commune': 'header label - always visible', 'Colline': 'header label - always visible', 'Sous_Colline': 'header label - always visible', 'date de collecte': 'inline label - visible with data', 'Nom de l\'AEP': 'no label', 'Nom d\'ouvrage': 'header label - always visible', 'Etat de mise en oeuvre de l\'ouvrage': 'header label - always visible', 'Volume (m3)': 'header label - always visible', 'Prendre la photo d\'ouvrages existant': 'no label', 'Prendre la photo d\'ouvrages existant_URL': 'no label', 'Prendre la photo du site � exploiter': 'no label', 'Prendre la photo du site � exploiter_URL': 'no label', 'Prendre les cordonn�es GPS': 'no label', '_Prendre les cordonn�es GPS_latitude': 'no label', '_Prendre les cordonn�es GPS_longitude': 'no label', '_Prendre les cordonn�es GPS_altitude': 'no label', '_Prendre les cordonn�es GPS_precision': 'no label', '_id': 'no label', '_uuid': 'no label', '_submission_time': 'no label', '_status': 'no label', '_submitted_by': 'no label', '__version__': 'no label', '_tags': 'no label', '_index': 'no label', });
lyr_RUYIGI_KanyenkandaMurehe_17.set('fieldLabels', {'Province': 'header label - always visible', 'Commune': 'header label - always visible', 'Colline': 'header label - always visible', 'Sous_Colline': 'header label - always visible', 'date de collecte': 'no label', 'Nom de l\'AEP': 'header label - always visible', 'Nom d\'ouvrage': 'header label - always visible', 'Etat de mise en oeuvre de l\'ouvrage': 'header label - always visible', 'Volume (m3)': 'header label - always visible', 'Prendre la photo d\'ouvrages existant': 'no label', 'Prendre la photo d\'ouvrages existant_URL': 'no label', 'Prendre la photo du site � exploiter': 'no label', 'Prendre la photo du site � exploiter_URL': 'no label', 'Prendre les cordonn�es GPS': 'no label', '_Prendre les cordonn�es GPS_latitude': 'no label', '_Prendre les cordonn�es GPS_longitude': 'no label', '_Prendre les cordonn�es GPS_altitude': 'no label', '_Prendre les cordonn�es GPS_precision': 'no label', '_id': 'no label', '_uuid': 'no label', '_submission_time': 'no label', '_status': 'no label', '_submitted_by': 'no label', '__version__': 'no label', '_tags': 'no label', '_index': 'no label', });
lyr_RUYIGI_Kizige_18.set('fieldLabels', {'Province': 'header label - always visible', 'Commune': 'header label - always visible', 'Colline': 'header label - always visible', 'Sous_Colline': 'header label - always visible', 'date de collecte': 'no label', 'Nom de l\'AEP': 'header label - always visible', 'Nom d\'ouvrage': 'header label - always visible', 'Etat de mise en oeuvre de l\'ouvrage': 'header label - always visible', 'Volume (m3)': 'header label - always visible', 'Prendre la photo d\'ouvrages existant': 'no label', 'Prendre la photo d\'ouvrages existant_URL': 'no label', 'Prendre la photo du site � exploiter': 'no label', 'Prendre la photo du site � exploiter_URL': 'no label', 'Prendre les cordonn�es GPS': 'no label', '_Prendre les cordonn�es GPS_latitude': 'no label', '_Prendre les cordonn�es GPS_longitude': 'no label', '_Prendre les cordonn�es GPS_altitude': 'no label', '_Prendre les cordonn�es GPS_precision': 'no label', '_id': 'no label', '_uuid': 'no label', '_submission_time': 'no label', '_status': 'no label', '_submitted_by': 'no label', '__version__': 'no label', '_tags': 'no label', '_index': 'no label', });
lyr_RUYIGI_Mubavu_19.set('fieldLabels', {'Province': 'header label - always visible', 'Commune': 'header label - always visible', 'Colline': 'header label - always visible', 'Sous_Colline': 'header label - always visible', 'date de collecte': 'no label', 'Nom de l\'AEP': 'header label - always visible', 'Nom d\'ouvrage': 'header label - always visible', 'Etat de mise en oeuvre de l\'ouvrage': 'header label - always visible', 'Volume (m3)': 'header label - always visible', 'Prendre la photo d\'ouvrages existant': 'no label', 'Prendre la photo d\'ouvrages existant_URL': 'no label', 'Prendre la photo du site � exploiter': 'no label', 'Prendre la photo du site � exploiter_URL': 'no label', 'Prendre les cordonn�es GPS': 'no label', '_Prendre les cordonn�es GPS_latitude': 'no label', '_Prendre les cordonn�es GPS_longitude': 'no label', '_Prendre les cordonn�es GPS_altitude': 'no label', '_Prendre les cordonn�es GPS_precision': 'no label', '_id': 'no label', '_uuid': 'no label', '_submission_time': 'no label', '_status': 'no label', '_submitted_by': 'no label', '__version__': 'no label', '_tags': 'no label', '_index': 'no label', });
lyr_RUYIGI_Musenga_Bartye_20.set('fieldLabels', {'Province': 'header label - always visible', 'Commune': 'header label - always visible', 'Colline': 'header label - always visible', 'Sous_Colline': 'header label - always visible', 'date de collecte': 'header label - always visible', 'Nom de l\'AEP': 'header label - always visible', 'Nom d\'ouvrage': 'header label - always visible', 'Etat de mise en oeuvre de l\'ouvrage': 'header label - always visible', 'Volume (m3)': 'header label - always visible', 'Prendre la photo d\'ouvrages existant': 'header label - always visible', 'Prendre la photo d\'ouvrages existant_URL': 'no label', 'Prendre la photo du site � exploiter': 'no label', 'Prendre la photo du site � exploiter_URL': 'no label', 'Prendre les cordonn�es GPS': 'no label', '_Prendre les cordonn�es GPS_latitude': 'no label', '_Prendre les cordonn�es GPS_longitude': 'no label', '_Prendre les cordonn�es GPS_altitude': 'no label', '_Prendre les cordonn�es GPS_precision': 'no label', '_id': 'no label', '_uuid': 'no label', '_submission_time': 'no label', '_status': 'no label', '_submitted_by': 'no label', '__version__': 'no label', '_tags': 'no label', '_index': 'no label', });
lyr_DESCRIPTIONDELAEP_21.set('fieldLabels', {'Nom de l\'AEP': 'header label - always visible', 'Province': 'header label - always visible', 'Commune': 'header label - always visible', 'Colline': 'header label - always visible', 'Sous_Colline': 'header label - always visible', 'Etat de mise en oeuvre de l\'AEP': 'header label - always visible', 'Lin�aire (km)': 'header label - always visible', 'D�bit  (l/S�c)': 'header label - always visible', 'Dotation d�bit (l/S�c)': 'header label - always visible', 'B�n�ficiaires': 'header label - always visible', 'Nom de(s) colline(s) en amont': 'header label - always visible', 'Nom de(s) colline(s) en aval': 'header label - always visible', 'Nom des collines desservies': 'header label - always visible', 'Prendre la photo d\'ouvrages existant': 'no label', 'Prendre la photo d\'ouvrages existant_URL': 'no label', 'Prendre la photo du site � exploiter': 'no label', 'Prendre la photo du site � exploiter_URL': 'no label', 'Prendre les cordonn�es GPS': 'no label', '_Prendre les cordonn�es GPS_latitude': 'no label', '_Prendre les cordonn�es GPS_longitude': 'no label', '_Prendre les cordonn�es GPS_altitude': 'no label', '_Prendre les cordonn�es GPS_precision': 'no label', });
lyr_DESCRIPTIONDELAEP_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});