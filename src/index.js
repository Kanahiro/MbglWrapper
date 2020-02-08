let rs = require('./layer/raster.js');
let gj = require('./layer/geojson.js');

class MbglWrapper {
    constructor(basemap) {
        this.basemap = basemap
        this.overlaySources = {}
        this.overlayLayers = []
    }

    clear() {
        for (let key in this.overlayLayers) {
            this.basemap.removeLayer(this.overlayLayers[key].id)
        }
        for (let key in this.overlaySources) {
            this.basemap.removeSource(key)
        }
        this.overlaySources = {}
        this.overlayLayers = []
    }

    clearAll() {
        let clearedStyle = {
            'version':8,
            'sources':{},
            'layers':[]
        }
        this.basemap.setStyle(clearedStyle, {'diff':false})
    }

    add(datasource, options={}) {
        switch (typeof(datasource)) {
            case 'string':
                this.addRaster(datasource, options)
                return
            case 'object':
                this.addGeojson(datasource, options)
                return
            default:
                return
        }
    }

    addRaster(tileUrl, options={}) {
        rs.add(this, tileUrl, options)
    }

    addGeojson(geojson, options={}) {
        gj.add(this, geojson, options)
    }
}

module.exports = MbglWrapper

//when load built scripts directly by browser
if (typeof window !== 'undefined') {
    window.MbglWrapper = MbglWrapper;
}