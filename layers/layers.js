var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_GPTES_1 = new ol.format.GeoJSON();
var features_GPTES_1 = format_GPTES_1.readFeatures(json_GPTES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GPTES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GPTES_1.addFeatures(features_GPTES_1);
var lyr_GPTES_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GPTES_1, 
                style: style_GPTES_1,
                popuplayertitle: "GP TES",
                interactive: true,
                title: '<img src="styles/legend/GPTES_1.png" /> GP TES'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GPTES_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GPTES_1];
lyr_GPTES_1.set('fieldAliases', {'Name': 'Name', 'x': 'x', 'y': 'y', 'Relative': 'Relative', 'Desc': 'Desc', 'images': 'images', 'Absolute': 'Absolute', 'img': 'img', });
lyr_GPTES_1.set('fieldImages', {'Name': 'TextEdit', 'x': 'Hidden', 'y': 'Hidden', 'Relative': 'Hidden', 'Desc': 'TextEdit', 'images': 'Hidden', 'Absolute': 'ExternalResource', 'img': 'Hidden', });
lyr_GPTES_1.set('fieldLabels', {'Name': 'inline label - always visible', 'Desc': 'inline label - always visible', 'Absolute': 'header label - always visible', });
lyr_GPTES_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});