/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 269.0, "minX": 0.0, "maxY": 3262.0, "series": [{"data": [[0.0, 269.0], [0.1, 272.0], [0.2, 272.0], [0.3, 273.0], [0.4, 274.0], [0.5, 274.0], [0.6, 274.0], [0.7, 274.0], [0.8, 275.0], [0.9, 275.0], [1.0, 275.0], [1.1, 275.0], [1.2, 276.0], [1.3, 276.0], [1.4, 276.0], [1.5, 276.0], [1.6, 276.0], [1.7, 276.0], [1.8, 276.0], [1.9, 277.0], [2.0, 277.0], [2.1, 277.0], [2.2, 277.0], [2.3, 277.0], [2.4, 277.0], [2.5, 277.0], [2.6, 277.0], [2.7, 277.0], [2.8, 278.0], [2.9, 278.0], [3.0, 278.0], [3.1, 278.0], [3.2, 278.0], [3.3, 278.0], [3.4, 278.0], [3.5, 278.0], [3.6, 278.0], [3.7, 278.0], [3.8, 279.0], [3.9, 279.0], [4.0, 279.0], [4.1, 279.0], [4.2, 279.0], [4.3, 279.0], [4.4, 279.0], [4.5, 279.0], [4.6, 279.0], [4.7, 279.0], [4.8, 279.0], [4.9, 279.0], [5.0, 279.0], [5.1, 280.0], [5.2, 280.0], [5.3, 280.0], [5.4, 280.0], [5.5, 280.0], [5.6, 280.0], [5.7, 280.0], [5.8, 280.0], [5.9, 280.0], [6.0, 280.0], [6.1, 280.0], [6.2, 280.0], [6.3, 280.0], [6.4, 281.0], [6.5, 281.0], [6.6, 281.0], [6.7, 281.0], [6.8, 281.0], [6.9, 281.0], [7.0, 281.0], [7.1, 281.0], [7.2, 281.0], [7.3, 281.0], [7.4, 281.0], [7.5, 281.0], [7.6, 281.0], [7.7, 281.0], [7.8, 281.0], [7.9, 281.0], [8.0, 281.0], [8.1, 282.0], [8.2, 282.0], [8.3, 282.0], [8.4, 282.0], [8.5, 282.0], [8.6, 282.0], [8.7, 282.0], [8.8, 282.0], [8.9, 282.0], [9.0, 282.0], [9.1, 282.0], [9.2, 282.0], [9.3, 283.0], [9.4, 283.0], [9.5, 283.0], [9.6, 283.0], [9.7, 283.0], [9.8, 283.0], [9.9, 283.0], [10.0, 283.0], [10.1, 283.0], [10.2, 283.0], [10.3, 283.0], [10.4, 283.0], [10.5, 283.0], [10.6, 283.0], [10.7, 283.0], [10.8, 284.0], [10.9, 284.0], [11.0, 284.0], [11.1, 284.0], [11.2, 284.0], [11.3, 284.0], [11.4, 284.0], [11.5, 284.0], [11.6, 284.0], [11.7, 284.0], [11.8, 284.0], [11.9, 284.0], [12.0, 284.0], [12.1, 284.0], [12.2, 284.0], [12.3, 285.0], [12.4, 285.0], [12.5, 285.0], [12.6, 285.0], [12.7, 285.0], [12.8, 285.0], [12.9, 285.0], [13.0, 285.0], [13.1, 285.0], [13.2, 285.0], [13.3, 285.0], [13.4, 285.0], [13.5, 285.0], [13.6, 285.0], [13.7, 285.0], [13.8, 285.0], [13.9, 285.0], [14.0, 285.0], [14.1, 286.0], [14.2, 286.0], [14.3, 286.0], [14.4, 286.0], [14.5, 286.0], [14.6, 286.0], [14.7, 286.0], [14.8, 286.0], [14.9, 286.0], [15.0, 286.0], [15.1, 286.0], [15.2, 286.0], [15.3, 286.0], [15.4, 286.0], [15.5, 286.0], [15.6, 286.0], [15.7, 286.0], [15.8, 286.0], [15.9, 286.0], [16.0, 286.0], [16.1, 287.0], [16.2, 287.0], [16.3, 287.0], [16.4, 287.0], [16.5, 287.0], [16.6, 287.0], [16.7, 287.0], [16.8, 287.0], [16.9, 287.0], [17.0, 287.0], [17.1, 287.0], [17.2, 287.0], [17.3, 287.0], [17.4, 287.0], [17.5, 287.0], [17.6, 287.0], [17.7, 287.0], [17.8, 287.0], [17.9, 287.0], [18.0, 287.0], [18.1, 287.0], [18.2, 287.0], [18.3, 287.0], [18.4, 288.0], [18.5, 288.0], [18.6, 288.0], [18.7, 288.0], [18.8, 288.0], [18.9, 288.0], [19.0, 288.0], [19.1, 288.0], [19.2, 288.0], [19.3, 288.0], [19.4, 288.0], [19.5, 288.0], [19.6, 288.0], [19.7, 288.0], [19.8, 288.0], [19.9, 288.0], [20.0, 288.0], [20.1, 288.0], [20.2, 288.0], [20.3, 288.0], [20.4, 288.0], [20.5, 288.0], [20.6, 288.0], [20.7, 288.0], [20.8, 288.0], [20.9, 289.0], [21.0, 289.0], [21.1, 289.0], [21.2, 289.0], [21.3, 289.0], [21.4, 289.0], [21.5, 289.0], [21.6, 289.0], [21.7, 289.0], [21.8, 289.0], [21.9, 289.0], [22.0, 289.0], [22.1, 289.0], [22.2, 289.0], [22.3, 289.0], [22.4, 289.0], [22.5, 289.0], [22.6, 289.0], [22.7, 289.0], [22.8, 289.0], [22.9, 289.0], [23.0, 289.0], [23.1, 289.0], [23.2, 289.0], [23.3, 289.0], [23.4, 289.0], [23.5, 289.0], [23.6, 290.0], [23.7, 290.0], [23.8, 290.0], [23.9, 290.0], [24.0, 290.0], [24.1, 290.0], [24.2, 290.0], [24.3, 290.0], [24.4, 290.0], [24.5, 290.0], [24.6, 290.0], [24.7, 290.0], [24.8, 290.0], [24.9, 290.0], [25.0, 290.0], [25.1, 290.0], [25.2, 290.0], [25.3, 290.0], [25.4, 290.0], [25.5, 290.0], [25.6, 290.0], [25.7, 290.0], [25.8, 290.0], [25.9, 290.0], [26.0, 290.0], [26.1, 290.0], [26.2, 290.0], [26.3, 290.0], [26.4, 290.0], [26.5, 290.0], [26.6, 290.0], [26.7, 290.0], [26.8, 290.0], [26.9, 290.0], [27.0, 290.0], [27.1, 291.0], [27.2, 291.0], [27.3, 291.0], [27.4, 291.0], [27.5, 291.0], [27.6, 291.0], [27.7, 291.0], [27.8, 291.0], [27.9, 291.0], [28.0, 291.0], [28.1, 291.0], [28.2, 291.0], [28.3, 291.0], [28.4, 291.0], [28.5, 291.0], [28.6, 291.0], [28.7, 291.0], [28.8, 291.0], [28.9, 291.0], [29.0, 291.0], [29.1, 291.0], [29.2, 291.0], [29.3, 291.0], [29.4, 291.0], [29.5, 291.0], [29.6, 291.0], [29.7, 291.0], [29.8, 291.0], [29.9, 291.0], [30.0, 291.0], [30.1, 292.0], [30.2, 292.0], [30.3, 292.0], [30.4, 292.0], [30.5, 292.0], [30.6, 292.0], [30.7, 292.0], [30.8, 292.0], [30.9, 292.0], [31.0, 292.0], [31.1, 292.0], [31.2, 292.0], [31.3, 292.0], [31.4, 292.0], [31.5, 292.0], [31.6, 292.0], [31.7, 292.0], [31.8, 292.0], [31.9, 292.0], [32.0, 292.0], [32.1, 292.0], [32.2, 292.0], [32.3, 292.0], [32.4, 292.0], [32.5, 292.0], [32.6, 292.0], [32.7, 292.0], [32.8, 292.0], [32.9, 292.0], [33.0, 292.0], [33.1, 292.0], [33.2, 293.0], [33.3, 293.0], [33.4, 293.0], [33.5, 293.0], [33.6, 293.0], [33.7, 293.0], [33.8, 293.0], [33.9, 293.0], [34.0, 293.0], [34.1, 293.0], [34.2, 293.0], [34.3, 293.0], [34.4, 293.0], [34.5, 293.0], [34.6, 293.0], [34.7, 293.0], [34.8, 293.0], [34.9, 293.0], [35.0, 293.0], [35.1, 293.0], [35.2, 293.0], [35.3, 293.0], [35.4, 293.0], [35.5, 293.0], [35.6, 293.0], [35.7, 293.0], [35.8, 293.0], [35.9, 293.0], [36.0, 293.0], [36.1, 293.0], [36.2, 293.0], [36.3, 293.0], [36.4, 293.0], [36.5, 293.0], [36.6, 293.0], [36.7, 293.0], [36.8, 293.0], [36.9, 294.0], [37.0, 294.0], [37.1, 294.0], [37.2, 294.0], [37.3, 294.0], [37.4, 294.0], [37.5, 294.0], [37.6, 294.0], [37.7, 294.0], [37.8, 294.0], [37.9, 294.0], [38.0, 294.0], [38.1, 294.0], [38.2, 294.0], [38.3, 294.0], [38.4, 294.0], [38.5, 294.0], [38.6, 294.0], [38.7, 294.0], [38.8, 294.0], [38.9, 294.0], [39.0, 294.0], [39.1, 294.0], [39.2, 294.0], [39.3, 294.0], [39.4, 294.0], [39.5, 294.0], [39.6, 294.0], [39.7, 294.0], [39.8, 294.0], [39.9, 294.0], [40.0, 294.0], [40.1, 294.0], [40.2, 294.0], [40.3, 295.0], [40.4, 295.0], [40.5, 295.0], [40.6, 295.0], [40.7, 295.0], [40.8, 295.0], [40.9, 295.0], [41.0, 295.0], [41.1, 295.0], [41.2, 295.0], [41.3, 295.0], [41.4, 295.0], [41.5, 295.0], [41.6, 295.0], [41.7, 295.0], [41.8, 295.0], [41.9, 295.0], [42.0, 295.0], [42.1, 295.0], [42.2, 295.0], [42.3, 295.0], [42.4, 295.0], [42.5, 295.0], [42.6, 295.0], [42.7, 295.0], [42.8, 295.0], [42.9, 295.0], [43.0, 295.0], [43.1, 295.0], [43.2, 295.0], [43.3, 295.0], [43.4, 295.0], [43.5, 295.0], [43.6, 295.0], [43.7, 296.0], [43.8, 296.0], [43.9, 296.0], [44.0, 296.0], [44.1, 296.0], [44.2, 296.0], [44.3, 296.0], [44.4, 296.0], [44.5, 296.0], [44.6, 296.0], [44.7, 296.0], [44.8, 296.0], [44.9, 296.0], [45.0, 296.0], [45.1, 296.0], [45.2, 296.0], [45.3, 296.0], [45.4, 296.0], [45.5, 296.0], [45.6, 296.0], [45.7, 296.0], [45.8, 296.0], [45.9, 296.0], [46.0, 296.0], [46.1, 296.0], [46.2, 296.0], [46.3, 296.0], [46.4, 296.0], [46.5, 296.0], [46.6, 296.0], [46.7, 296.0], [46.8, 296.0], [46.9, 296.0], [47.0, 296.0], [47.1, 297.0], [47.2, 297.0], [47.3, 297.0], [47.4, 297.0], [47.5, 297.0], [47.6, 297.0], [47.7, 297.0], [47.8, 297.0], [47.9, 297.0], [48.0, 297.0], [48.1, 297.0], [48.2, 297.0], [48.3, 297.0], [48.4, 297.0], [48.5, 297.0], [48.6, 297.0], [48.7, 297.0], [48.8, 297.0], [48.9, 297.0], [49.0, 297.0], [49.1, 297.0], [49.2, 297.0], [49.3, 297.0], [49.4, 297.0], [49.5, 297.0], [49.6, 297.0], [49.7, 297.0], [49.8, 297.0], [49.9, 298.0], [50.0, 298.0], [50.1, 298.0], [50.2, 298.0], [50.3, 298.0], [50.4, 298.0], [50.5, 298.0], [50.6, 298.0], [50.7, 298.0], [50.8, 298.0], [50.9, 298.0], [51.0, 298.0], [51.1, 298.0], [51.2, 298.0], [51.3, 298.0], [51.4, 298.0], [51.5, 298.0], [51.6, 298.0], [51.7, 298.0], [51.8, 298.0], [51.9, 298.0], [52.0, 298.0], [52.1, 298.0], [52.2, 298.0], [52.3, 298.0], [52.4, 298.0], [52.5, 298.0], [52.6, 298.0], [52.7, 298.0], [52.8, 299.0], [52.9, 299.0], [53.0, 299.0], [53.1, 299.0], [53.2, 299.0], [53.3, 299.0], [53.4, 299.0], [53.5, 299.0], [53.6, 299.0], [53.7, 299.0], [53.8, 299.0], [53.9, 299.0], [54.0, 299.0], [54.1, 299.0], [54.2, 299.0], [54.3, 299.0], [54.4, 299.0], [54.5, 299.0], [54.6, 299.0], [54.7, 299.0], [54.8, 299.0], [54.9, 299.0], [55.0, 299.0], [55.1, 299.0], [55.2, 299.0], [55.3, 299.0], [55.4, 299.0], [55.5, 299.0], [55.6, 299.0], [55.7, 300.0], [55.8, 300.0], [55.9, 300.0], [56.0, 300.0], [56.1, 300.0], [56.2, 300.0], [56.3, 300.0], [56.4, 300.0], [56.5, 300.0], [56.6, 300.0], [56.7, 300.0], [56.8, 300.0], [56.9, 300.0], [57.0, 300.0], [57.1, 300.0], [57.2, 300.0], [57.3, 300.0], [57.4, 300.0], [57.5, 300.0], [57.6, 300.0], [57.7, 300.0], [57.8, 300.0], [57.9, 300.0], [58.0, 300.0], [58.1, 300.0], [58.2, 300.0], [58.3, 300.0], [58.4, 300.0], [58.5, 300.0], [58.6, 300.0], [58.7, 300.0], [58.8, 301.0], [58.9, 301.0], [59.0, 301.0], [59.1, 301.0], [59.2, 301.0], [59.3, 301.0], [59.4, 301.0], [59.5, 301.0], [59.6, 301.0], [59.7, 301.0], [59.8, 301.0], [59.9, 301.0], [60.0, 301.0], [60.1, 301.0], [60.2, 301.0], [60.3, 301.0], [60.4, 301.0], [60.5, 301.0], [60.6, 301.0], [60.7, 301.0], [60.8, 301.0], [60.9, 301.0], [61.0, 301.0], [61.1, 301.0], [61.2, 301.0], [61.3, 301.0], [61.4, 301.0], [61.5, 301.0], [61.6, 301.0], [61.7, 302.0], [61.8, 302.0], [61.9, 302.0], [62.0, 302.0], [62.1, 302.0], [62.2, 302.0], [62.3, 302.0], [62.4, 302.0], [62.5, 302.0], [62.6, 302.0], [62.7, 302.0], [62.8, 302.0], [62.9, 302.0], [63.0, 302.0], [63.1, 302.0], [63.2, 302.0], [63.3, 302.0], [63.4, 302.0], [63.5, 302.0], [63.6, 302.0], [63.7, 302.0], [63.8, 302.0], [63.9, 302.0], [64.0, 302.0], [64.1, 302.0], [64.2, 302.0], [64.3, 303.0], [64.4, 303.0], [64.5, 303.0], [64.6, 303.0], [64.7, 303.0], [64.8, 303.0], [64.9, 303.0], [65.0, 303.0], [65.1, 303.0], [65.2, 303.0], [65.3, 303.0], [65.4, 303.0], [65.5, 303.0], [65.6, 303.0], [65.7, 303.0], [65.8, 303.0], [65.9, 303.0], [66.0, 303.0], [66.1, 303.0], [66.2, 303.0], [66.3, 303.0], [66.4, 303.0], [66.5, 303.0], [66.6, 303.0], [66.7, 303.0], [66.8, 304.0], [66.9, 304.0], [67.0, 304.0], [67.1, 304.0], [67.2, 304.0], [67.3, 304.0], [67.4, 304.0], [67.5, 304.0], [67.6, 304.0], [67.7, 304.0], [67.8, 304.0], [67.9, 304.0], [68.0, 304.0], [68.1, 304.0], [68.2, 304.0], [68.3, 304.0], [68.4, 304.0], [68.5, 304.0], [68.6, 304.0], [68.7, 304.0], [68.8, 304.0], [68.9, 304.0], [69.0, 304.0], [69.1, 304.0], [69.2, 304.0], [69.3, 304.0], [69.4, 305.0], [69.5, 305.0], [69.6, 305.0], [69.7, 305.0], [69.8, 305.0], [69.9, 305.0], [70.0, 305.0], [70.1, 305.0], [70.2, 305.0], [70.3, 305.0], [70.4, 305.0], [70.5, 305.0], [70.6, 305.0], [70.7, 305.0], [70.8, 305.0], [70.9, 305.0], [71.0, 305.0], [71.1, 305.0], [71.2, 305.0], [71.3, 305.0], [71.4, 305.0], [71.5, 306.0], [71.6, 306.0], [71.7, 306.0], [71.8, 306.0], [71.9, 306.0], [72.0, 306.0], [72.1, 306.0], [72.2, 306.0], [72.3, 306.0], [72.4, 306.0], [72.5, 306.0], [72.6, 306.0], [72.7, 306.0], [72.8, 306.0], [72.9, 306.0], [73.0, 306.0], [73.1, 306.0], [73.2, 307.0], [73.3, 307.0], [73.4, 307.0], [73.5, 307.0], [73.6, 307.0], [73.7, 307.0], [73.8, 307.0], [73.9, 307.0], [74.0, 307.0], [74.1, 307.0], [74.2, 307.0], [74.3, 307.0], [74.4, 307.0], [74.5, 307.0], [74.6, 307.0], [74.7, 307.0], [74.8, 308.0], [74.9, 308.0], [75.0, 308.0], [75.1, 308.0], [75.2, 308.0], [75.3, 308.0], [75.4, 308.0], [75.5, 308.0], [75.6, 308.0], [75.7, 308.0], [75.8, 308.0], [75.9, 308.0], [76.0, 308.0], [76.1, 308.0], [76.2, 308.0], [76.3, 308.0], [76.4, 308.0], [76.5, 308.0], [76.6, 308.0], [76.7, 308.0], [76.8, 308.0], [76.9, 309.0], [77.0, 309.0], [77.1, 309.0], [77.2, 309.0], [77.3, 309.0], [77.4, 309.0], [77.5, 309.0], [77.6, 309.0], [77.7, 309.0], [77.8, 309.0], [77.9, 309.0], [78.0, 309.0], [78.1, 309.0], [78.2, 309.0], [78.3, 309.0], [78.4, 309.0], [78.5, 310.0], [78.6, 310.0], [78.7, 310.0], [78.8, 310.0], [78.9, 310.0], [79.0, 310.0], [79.1, 310.0], [79.2, 310.0], [79.3, 310.0], [79.4, 310.0], [79.5, 310.0], [79.6, 310.0], [79.7, 310.0], [79.8, 310.0], [79.9, 310.0], [80.0, 310.0], [80.1, 310.0], [80.2, 311.0], [80.3, 311.0], [80.4, 311.0], [80.5, 311.0], [80.6, 311.0], [80.7, 311.0], [80.8, 311.0], [80.9, 311.0], [81.0, 311.0], [81.1, 311.0], [81.2, 311.0], [81.3, 311.0], [81.4, 312.0], [81.5, 312.0], [81.6, 312.0], [81.7, 312.0], [81.8, 312.0], [81.9, 312.0], [82.0, 312.0], [82.1, 312.0], [82.2, 312.0], [82.3, 312.0], [82.4, 312.0], [82.5, 312.0], [82.6, 312.0], [82.7, 313.0], [82.8, 313.0], [82.9, 313.0], [83.0, 313.0], [83.1, 313.0], [83.2, 313.0], [83.3, 313.0], [83.4, 313.0], [83.5, 313.0], [83.6, 313.0], [83.7, 314.0], [83.8, 314.0], [83.9, 314.0], [84.0, 314.0], [84.1, 314.0], [84.2, 314.0], [84.3, 314.0], [84.4, 314.0], [84.5, 314.0], [84.6, 315.0], [84.7, 315.0], [84.8, 315.0], [84.9, 315.0], [85.0, 315.0], [85.1, 315.0], [85.2, 315.0], [85.3, 316.0], [85.4, 316.0], [85.5, 316.0], [85.6, 316.0], [85.7, 316.0], [85.8, 316.0], [85.9, 316.0], [86.0, 317.0], [86.1, 317.0], [86.2, 317.0], [86.3, 317.0], [86.4, 317.0], [86.5, 317.0], [86.6, 317.0], [86.7, 318.0], [86.8, 318.0], [86.9, 318.0], [87.0, 318.0], [87.1, 318.0], [87.2, 318.0], [87.3, 318.0], [87.4, 319.0], [87.5, 319.0], [87.6, 319.0], [87.7, 319.0], [87.8, 319.0], [87.9, 319.0], [88.0, 320.0], [88.1, 320.0], [88.2, 320.0], [88.3, 320.0], [88.4, 320.0], [88.5, 321.0], [88.6, 321.0], [88.7, 321.0], [88.8, 321.0], [88.9, 321.0], [89.0, 322.0], [89.1, 322.0], [89.2, 322.0], [89.3, 322.0], [89.4, 322.0], [89.5, 323.0], [89.6, 323.0], [89.7, 323.0], [89.8, 323.0], [89.9, 324.0], [90.0, 324.0], [90.1, 324.0], [90.2, 324.0], [90.3, 324.0], [90.4, 324.0], [90.5, 324.0], [90.6, 325.0], [90.7, 325.0], [90.8, 325.0], [90.9, 326.0], [91.0, 326.0], [91.1, 326.0], [91.2, 326.0], [91.3, 327.0], [91.4, 327.0], [91.5, 328.0], [91.6, 329.0], [91.7, 329.0], [91.8, 329.0], [91.9, 329.0], [92.0, 330.0], [92.1, 330.0], [92.2, 330.0], [92.3, 331.0], [92.4, 332.0], [92.5, 332.0], [92.6, 332.0], [92.7, 333.0], [92.8, 333.0], [92.9, 334.0], [93.0, 334.0], [93.1, 335.0], [93.2, 336.0], [93.3, 336.0], [93.4, 337.0], [93.5, 337.0], [93.6, 338.0], [93.7, 339.0], [93.8, 339.0], [93.9, 339.0], [94.0, 340.0], [94.1, 341.0], [94.2, 341.0], [94.3, 342.0], [94.4, 342.0], [94.5, 343.0], [94.6, 343.0], [94.7, 345.0], [94.8, 346.0], [94.9, 347.0], [95.0, 348.0], [95.1, 348.0], [95.2, 349.0], [95.3, 350.0], [95.4, 350.0], [95.5, 354.0], [95.6, 356.0], [95.7, 359.0], [95.8, 361.0], [95.9, 363.0], [96.0, 364.0], [96.1, 367.0], [96.2, 370.0], [96.3, 371.0], [96.4, 372.0], [96.5, 374.0], [96.6, 375.0], [96.7, 377.0], [96.8, 379.0], [96.9, 383.0], [97.0, 387.0], [97.1, 391.0], [97.2, 392.0], [97.3, 394.0], [97.4, 395.0], [97.5, 399.0], [97.6, 401.0], [97.7, 407.0], [97.8, 409.0], [97.9, 417.0], [98.0, 423.0], [98.1, 425.0], [98.2, 428.0], [98.3, 432.0], [98.4, 434.0], [98.5, 439.0], [98.6, 443.0], [98.7, 448.0], [98.8, 456.0], [98.9, 461.0], [99.0, 465.0], [99.1, 471.0], [99.2, 478.0], [99.3, 502.0], [99.4, 517.0], [99.5, 554.0], [99.6, 707.0], [99.7, 2099.0], [99.8, 2311.0], [99.9, 3052.0], [100.0, 3262.0]], "isOverall": false, "label": "POST login fakestore Api", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 3280.0, "series": [{"data": [[2100.0, 3.0], [2200.0, 2.0], [2300.0, 2.0], [600.0, 3.0], [2500.0, 1.0], [700.0, 4.0], [2800.0, 1.0], [2900.0, 2.0], [3000.0, 3.0], [3100.0, 2.0], [200.0, 3280.0], [3200.0, 1.0], [300.0, 2472.0], [400.0, 104.0], [1700.0, 1.0], [1800.0, 1.0], [500.0, 15.0], [2000.0, 1.0]], "isOverall": false, "label": "POST login fakestore Api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 20.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 5856.0, "series": [{"data": [[0.0, 5856.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 22.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [[3.0, 20.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 11.714003944773177, "minX": 1.75976406E12, "maxY": 20.0, "series": [{"data": [[1.75976424E12, 20.0], [1.75976412E12, 20.0], [1.7597643E12, 20.0], [1.75976418E12, 20.0], [1.75976406E12, 11.714003944773177], [1.75976436E12, 19.7043618739903]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75976436E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 300.53333333333336, "minX": 1.0, "maxY": 414.25, "series": [{"data": [[2.0, 307.40000000000003], [8.0, 324.56666666666666], [9.0, 323.19354838709677], [10.0, 303.3125], [11.0, 302.4242424242425], [3.0, 368.3636363636364], [12.0, 300.53333333333336], [13.0, 308.8529411764706], [14.0, 303.9333333333333], [15.0, 301.00000000000006], [1.0, 414.25], [4.0, 328.88888888888886], [16.0, 310.3333333333333], [17.0, 302.8285714285715], [18.0, 302.89655172413785], [19.0, 300.53333333333336], [5.0, 304.3333333333332], [20.0, 311.62333086053434], [6.0, 312.83333333333337], [7.0, 309.6206896551724]], "isOverall": false, "label": "POST login fakestore Api", "isController": false}, {"data": [[19.2566971854866, 311.51305527297444]], "isOverall": false, "label": "POST login fakestore Api-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 2634.75, "minX": 1.75976406E12, "maxY": 17945.716666666667, "series": [{"data": [[1.75976424E12, 17915.983333333334], [1.75976412E12, 17932.516666666666], [1.7597643E12, 17945.716666666667], [1.75976418E12, 17503.05], [1.75976406E12, 7578.0], [1.75976436E12, 9242.666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75976424E12, 6230.733333333334], [1.75976412E12, 6236.0], [1.7597643E12, 6241.266666666666], [1.75976418E12, 6090.45], [1.75976406E12, 2634.75], [1.75976436E12, 3216.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75976436E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 302.2514571190674, "minX": 1.75976406E12, "maxY": 341.1356655290102, "series": [{"data": [[1.75976424E12, 302.37030859049196], [1.75976412E12, 304.9516666666671], [1.7597643E12, 302.2514571190674], [1.75976418E12, 341.1356655290102], [1.75976406E12, 310.69625246548287], [1.75976436E12, 304.4943457189014]], "isOverall": false, "label": "POST login fakestore Api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75976436E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 302.2464612822649, "minX": 1.75976406E12, "maxY": 341.1322525597272, "series": [{"data": [[1.75976424E12, 302.36947456213494], [1.75976412E12, 304.9483333333333], [1.7597643E12, 302.2464612822649], [1.75976418E12, 341.1322525597272], [1.75976406E12, 310.69033530572005], [1.75976436E12, 304.48949919224566]], "isOverall": false, "label": "POST login fakestore Api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75976436E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.75976406E12, "maxY": 5.850098619329386, "series": [{"data": [[1.75976424E12, 2.2869057547956633], [1.75976412E12, 2.5891666666666655], [1.7597643E12, 2.41465445462115], [1.75976418E12, 2.4411262798634854], [1.75976406E12, 5.850098619329386], [1.75976436E12, 0.0]], "isOverall": false, "label": "POST login fakestore Api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75976436E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 269.0, "minX": 1.75976406E12, "maxY": 770.0, "series": [{"data": [[1.75976424E12, 678.0], [1.75976412E12, 770.0], [1.7597643E12, 619.0], [1.75976418E12, 567.0], [1.75976406E12, 751.0], [1.75976436E12, 447.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75976424E12, 317.0], [1.75976412E12, 329.9000000000001], [1.7597643E12, 316.0], [1.75976418E12, 322.70000000000005], [1.75976406E12, 330.2], [1.75976436E12, 333.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75976424E12, 426.0], [1.75976412E12, 476.9100000000001], [1.7597643E12, 459.94000000000005], [1.75976418E12, 440.47], [1.75976406E12, 531.7200000000003], [1.75976436E12, 402.39999999999986]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75976424E12, 336.0], [1.75976412E12, 347.0], [1.7597643E12, 324.89999999999986], [1.75976418E12, 356.6999999999998], [1.75976406E12, 377.39999999999986], [1.75976436E12, 371.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.75976424E12, 270.0], [1.75976412E12, 269.0], [1.7597643E12, 270.0], [1.75976418E12, 272.0], [1.75976406E12, 274.0], [1.75976436E12, 274.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75976424E12, 296.0], [1.75976412E12, 298.0], [1.7597643E12, 299.0], [1.75976418E12, 296.0], [1.75976406E12, 300.0], [1.75976436E12, 299.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75976436E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 290.0, "minX": 1.0, "maxY": 3159.0, "series": [{"data": [[8.0, 309.0], [3.0, 299.0], [13.0, 299.0], [14.0, 293.5], [16.0, 300.0], [1.0, 294.0], [17.0, 300.0], [18.0, 300.0], [19.0, 298.5], [20.0, 297.0], [21.0, 300.0], [22.0, 315.5], [23.0, 300.5], [6.0, 349.0], [28.0, 290.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[23.0, 3159.0], [28.0, 2311.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 290.0, "minX": 1.0, "maxY": 3159.0, "series": [{"data": [[8.0, 309.0], [3.0, 299.0], [13.0, 299.0], [14.0, 293.5], [16.0, 300.0], [1.0, 294.0], [17.0, 300.0], [18.0, 300.0], [19.0, 298.0], [20.0, 297.0], [21.0, 300.0], [22.0, 315.5], [23.0, 300.5], [6.0, 349.0], [28.0, 290.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[23.0, 3159.0], [28.0, 2311.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 8.583333333333334, "minX": 1.75976406E12, "maxY": 20.0, "series": [{"data": [[1.75976424E12, 20.0], [1.75976412E12, 20.0], [1.7597643E12, 20.0], [1.75976418E12, 19.5], [1.75976406E12, 8.583333333333334], [1.75976436E12, 10.216666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75976436E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 8.45, "minX": 1.75976406E12, "maxY": 20.016666666666666, "series": [{"data": [[1.75976424E12, 19.983333333333334], [1.75976412E12, 20.0], [1.7597643E12, 20.016666666666666], [1.75976418E12, 19.533333333333335], [1.75976406E12, 8.45], [1.75976436E12, 10.316666666666666]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75976436E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.75976406E12, "maxY": 20.016666666666666, "series": [{"data": [[1.75976424E12, 19.983333333333334], [1.75976412E12, 20.0], [1.7597643E12, 20.016666666666666], [1.75976418E12, 19.2], [1.75976406E12, 8.45], [1.75976436E12, 10.316666666666666]], "isOverall": false, "label": "POST login fakestore Api-success", "isController": false}, {"data": [[1.75976418E12, 0.3333333333333333]], "isOverall": false, "label": "POST login fakestore Api-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75976436E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.75976406E12, "maxY": 20.016666666666666, "series": [{"data": [[1.75976424E12, 19.983333333333334], [1.75976412E12, 20.0], [1.7597643E12, 20.016666666666666], [1.75976418E12, 19.2], [1.75976406E12, 8.45], [1.75976436E12, 10.316666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.75976418E12, 0.3333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75976436E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

