var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'atm': 'atm', 'construction': 'construction', 'tower:type': 'tower:type', 'tower:construction': 'tower:construction', 'man_made': 'man_made', 'covered': 'covered', 'access': 'access', 'website': 'website', 'rooms': 'rooms', 'reservation': 'reservation', 'internet_access:fee': 'internet_access:fee', 'internet_access': 'internet_access', 'image': 'image', 'email': 'email', 'description': 'description', 'air_conditioning': 'air_conditioning', 'addr:housenumber': 'addr:housenumber', 'takeaway': 'takeaway', 'brand:wikipedia': 'brand:wikipedia', 'brand:wikidata': 'brand:wikidata', 'alt_name': 'alt_name', 'sport': 'sport', 'leisure': 'leisure', 'tourism': 'tourism', 'stars': 'stars', 'official_name': 'official_name', 'cuisine': 'cuisine', 'brand': 'brand', 'religion': 'religion', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'shop': 'shop', 'office': 'office', 'admin_level': 'admin_level', 'name': 'name', 'amenity': 'amenity', 'type': 'type', 'school:type_idn': 'school:type_idn', 'operator:type': 'operator:type', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', });
lyr_building_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'atm': 'TextEdit', 'construction': 'TextEdit', 'tower:type': 'TextEdit', 'tower:construction': 'TextEdit', 'man_made': 'TextEdit', 'covered': 'TextEdit', 'access': 'TextEdit', 'website': 'TextEdit', 'rooms': 'TextEdit', 'reservation': 'TextEdit', 'internet_access:fee': 'TextEdit', 'internet_access': 'TextEdit', 'image': 'TextEdit', 'email': 'TextEdit', 'description': 'TextEdit', 'air_conditioning': 'TextEdit', 'addr:housenumber': 'TextEdit', 'takeaway': 'TextEdit', 'brand:wikipedia': 'TextEdit', 'brand:wikidata': 'TextEdit', 'alt_name': 'TextEdit', 'sport': 'TextEdit', 'leisure': 'TextEdit', 'tourism': 'TextEdit', 'stars': 'TextEdit', 'official_name': 'TextEdit', 'cuisine': 'TextEdit', 'brand': 'TextEdit', 'religion': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'shop': 'TextEdit', 'office': 'TextEdit', 'admin_level': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'type': 'TextEdit', 'school:type_idn': 'TextEdit', 'operator:type': 'TextEdit', 'capacity:persons': 'TextEdit', 'building:structure': 'TextEdit', 'building:roof': 'TextEdit', 'building:material': 'TextEdit', 'building:levels': 'TextEdit', 'building:floor': 'TextEdit', 'building:condition': 'TextEdit', 'backup_generator': 'TextEdit', 'addr:full': 'TextEdit', 'addr:city': 'TextEdit', 'access:roof': 'TextEdit', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'atm': 'no label', 'construction': 'no label', 'tower:type': 'no label', 'tower:construction': 'no label', 'man_made': 'no label', 'covered': 'no label', 'access': 'no label', 'website': 'no label', 'rooms': 'no label', 'reservation': 'no label', 'internet_access:fee': 'no label', 'internet_access': 'no label', 'image': 'no label', 'email': 'no label', 'description': 'no label', 'air_conditioning': 'no label', 'addr:housenumber': 'no label', 'takeaway': 'no label', 'brand:wikipedia': 'no label', 'brand:wikidata': 'no label', 'alt_name': 'no label', 'sport': 'no label', 'leisure': 'no label', 'tourism': 'no label', 'stars': 'no label', 'official_name': 'no label', 'cuisine': 'no label', 'brand': 'no label', 'religion': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'shop': 'no label', 'office': 'no label', 'admin_level': 'no label', 'name': 'no label', 'amenity': 'no label', 'type': 'no label', 'school:type_idn': 'no label', 'operator:type': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', });
lyr_building_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});