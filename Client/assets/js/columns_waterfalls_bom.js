/* ------------------------------------------------------------------------------
 *
 *  # Echarts - columns and waterfalls
 *
 *  Columns and waterfalls chart configurations
 *
 *  Version: 1.0
 *  Latest update: August 1, 2015
 *
 * ---------------------------------------------------------------------------- */

$(function () {

    // Set paths
    // ------------------------------

    require.config({
        paths: {
            echarts: 'assets/js/plugins/visualization/echarts'
        }
    });


    // Configuration
    // ------------------------------

    require(
        [
            'echarts',
            'echarts/theme/limitless',
            'echarts/chart/bar',
            'echarts/chart/line'
        ],


        // Charts setup
        function (ec, limitless) {


            // Initialize charts
            // ------------------------------

            var basic_columns = ec.init(document.getElementById('basic_columns'), limitless);
            var basic_main = ec.init(document.getElementById('basic_main'), limitless);
            

            // Charts setup
            // ------------------------------


            //
            // Basic columns options
            //

            basic_columns_options = {

                // Setup grid
                grid: {
                    x: 40,
                    x2: 40,
                    y: 35,
                    y2: 25
                },

                color: ['#FF9800', '#F44336', '#009688', '#4CAF50', '#03A9F4', '#8BC34A'],
                // Add tooltip
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: {
                            show: true,
                            orient: 'vertical',
                            x: 'right', 
                            y: 70,
                            feature: {
                                mark: {
                                    show: true,
                                    title: {
                                        mark: 'Markline switch',
                                        markUndo: 'Undo markline',
                                        markClear: 'Clear markline'
                                    }
                                },
                                //dataView: {
                                    //show: true,
                                    //readOnly: false,
                                    //title: 'View data',
                                    //lang: ['View chart data', 'Close', 'Update']
                               // },
                                magicType: {
                                    show: true,
                                    title: {
                                        //line: 'Switch to line chart',
                                        //bar: 'Switch to bar chart',
                                        stack: 'Accumulated View',
                                        tiled: 'Side by Side View'
                                    },
                                    type: ['stack', 'tiled']
                                },
                                restore: {
                                    show: true,
                                    title: 'Restore'
                                },
                                saveAsImage: {
                                    show: true,
                                    title: 'Same as image',
                                    lang: ['Save']
                                }
                            }
                        },

                // Add legend
                legend: {
                    data: ['TOTAL', 'ORDEM ITEM', 'VOID SERVICE','ADD GRATUITY','CANCEL','PAYMENT']
                },

                // Enable drag recalculate
                calculable: true,

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    name: 'Employees',
                    data: ['John Matt', 'Bob Burn', 'Anna Lins', 'Maria M.', 'John Wick','John Matt', 'Bob Burn', 'Anna Lins', 'Maria M.', 'John Wick','John Matt', 'Bob Burn', 'Anna Lins', 'Maria M.', 'John Wick','John Matt', 'Bob Burn', 'Anna Lins', 'Maria M.', 'John Wick','John Matt', 'Bob Burn', 'Anna Lins', 'Maria M.', 'John Wick','John Matt', 'Bob Burn', 'Anna Lins', 'Maria M.', 'John Wick','John Matt', 'Bob Burn', 'Anna Lins', 'Maria M.', 'John Wick','John Matt', 'Bob Burn', 'Anna Lins', 'Maria M.', 'John Wick','John Matt', 'Bob Burn', 'Anna Lins', 'Maria M.', 'John Wick','John Matt', 'Bob Burn', 'Anna Lins', 'Maria M.', 'John Wick'],
                    show: false,

                        
                }],

                // Vertical axis
                yAxis: [{
                    type: 'amount',
                    name: '($)'
                }],

                // Add series
                series: [
                    {
                        name: 'TOTAL',
                        type: 'bar',
                        data: [-380, -380, -375, -166, -318, -249, -398, -282, -210, -213, -271, -216, -298, -154, -272, -172, -208, -359, -308, -217, -209, -219, -371, -153, -219, -292, -176, -341, -232, -390, -273, -358, -162, -271, -392, -218, -277, -332, -309, -290, -226, -398, -231, -313, -340, -215, -299, -379, -173, -308],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                    textStyle: {
                                        fontWeight: 500
                                    }
                                }
                            }
                        },

                    },
                    {
                        name: 'ORDEM ITEM',
                        type: 'bar',
                        data: [-380, -380, -375, -166, -318, -249, -398, -282, -210, -213, -271, -216, -298, -154, -272, -172, -208, -359, -308, -217, -209, -219, -371, -153, -219, -292, -176, -341, -232, -390, -273, -358, -162, -271, -392, -218, -277, -332, -309, -290, -226, -398, -231, -313, -340, -215, -299, -379, -173, -308],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                    textStyle: {
                                        fontWeight: 500
                                    }
                                }
                            }
                        },

                    },
                    {
                    name: 'VOID SERVICE',
                        type: 'bar',
                        data: [3258, 2794, 3077,  1675,  2984,  3754,  1500,  2226,  3948,  1939,  3949,  2073,  2792,  3299,  3808,  1716,  3565,  3568, 3185,  1560,  2368,  2787,  1665,  1821,  3718,  2927,  2349,  1923,  3189,  3566,  1650,  3681,  2244,  1776,  3099, 3810,  2312,  3648,  1621,  2567,  1520,  3617,  3544,  1565,  3653,  1528,  3793,  2562,  2713,  3597],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                    textStyle: {
                                        fontWeight: 500
                                    }
                                }
                            }
                        },

                },
                {
                    name: 'ADD GRATUITY',
                        type: 'bar',
                        data: [3258, 2794, 3077,  1675,  2984,  3754,  1500,  2226,  3948,  1939,  3949,  2073,  2792,  3299,  3808,  1716,  3565,  3568, 3185,  1560,  2368,  2787,  1665,  1821,  3718,  2927,  2349,  1923,  3189,  3566,  1650,  3681,  2244,  1776,  3099, 3810,  2312,  3648,  1621,  2567,  1520,  3617,  3544,  1565,  3653,  1528,  3793,  2562,  2713,  3597],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                    textStyle: {
                                        fontWeight: 500
                                    }
                                }
                            }
                        },

                },
                {
                    name: 'PAYMENT',
                        type: 'bar',
                        data: [3258, 2794, 3077,  1675,  2984,  3754,  1500,  2226,  3948,  1939,  3949,  2073,  2792,  3299,  3808,  1716,  3565,  3568, 3185,  1560,  2368,  2787,  1665,  1821,  3718,  2927,  2349,  1923,  3189,  3566,  1650,  3681,  2244,  1776,  3099, 3810,  2312,  3648,  1621,  2567,  1520,  3617,  3544,  1565,  3653,  1528,  3793,  2562,  2713,  3597],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                    textStyle: {
                                        fontWeight: 500
                                    }
                                }
                            }
                        },

                },
                {
                    name: 'CANCEL',
                        type: 'bar',
                        data: [3258, 2794, 3077,  1675,  2984,  3754,  1500,  2226,  3948,  1939,  3949,  2073,  2792,  3299,  3808,  1716,  3565,  3568, 3185,  1560,  2368,  2787,  1665,  1821,  3718,  2927,  2349,  1923,  3189,  3566,  1650,  3681,  2244,  1776,  3099, 3810,  2312,  3648,  1621,  2567,  1520,  3617,  3544,  1565,  3653,  1528,  3793,  2562,  2713,  3597],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                    textStyle: {
                                        fontWeight: 500
                                    }
                                }
                            }
                        },

                }]

            };


            //
            // Stacked columns options
            //

                basic_main_options = {

                // Setup grid
                grid: {
                    x: 40,
                    x2: 40,
                    y: 35,
                    y2: 25
                },


                // Add tooltip
                tooltip: {
                    trigger: 'axis'
                },

                // Add legend
                legend: {
                    data: ['TOTAL', 'ORDEM ITEM', 'ITEM VOID','ADD GRATUITY','DISCOUNT']
                },
                toolbox: {
                            show: true,
                            orient: 'vertical',
                            x: 'right', 
                            y: 70,
                            feature: {
                                mark: {
                                    show: true,
                                    title: {
                                        mark: 'Markline switch',
                                        markUndo: 'Undo markline',
                                        markClear: 'Clear markline'
                                    }
                                },
                                //dataView: {
                                   // show: true,
                                    //readOnly: false,
                                    //title: 'View data',
                                   // lang: ['View chart data', 'Close', 'Update']
                                //},
                                magicType: {
                                    show: true,
                                    title: {
                                        //line: 'Switch to line chart',
                                        //bar: 'Switch to bar chart',
                                        stack: 'Accumulated View',
                                        tiled: 'Side by Side View'
                                    },
                                    type: ['stack', 'tiled']
                                },
                                restore: {
                                    show: true,
                                    title: 'Restore'
                                },
                                saveAsImage: {
                                    show: true,
                                    title: 'Same as image',
                                    lang: ['Save']
                                }
                            }
                        },
                // Enable drag recalculate
                calculable: true,

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data: ['Restaurant #273', 'Restaurant #7643', 'Restaurant #276', 'Restaurant #643'],
                    show: true,

                        
                }],

                // Vertical axis
                yAxis: [{
                    type: 'amount',
                    name: '($)'
                },
                    {
                    type: 'value',
                    name: 'Visitors'
                }],

                // Add series
                series: [
                    {
                        name: 'TOTAL',
                        type: 'bar',
                        data: [154233.05, 53410.83, 155919.87, 65254.32],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                    textStyle: {
                                        fontWeight: 500
                                    }
                                }
                            }
                        },

                    },
                    {
                        name: 'ITEM VOID',
                        type: 'bar',
                        data: [-11926.32, -910.59, -8566.63, -10452.65],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                    textStyle: {
                                        fontWeight: 500
                                    }
                                }
                            }
                        },

                    },
                    {
                        name: 'DISCOUNT',
                        type: 'bar',
                        data: [-2829.60, -625.48, -1122.90, -1000.54],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                    textStyle: {
                                        fontWeight: 500
                                    }
                                }
                            }
                        },

                    },
                    {
                        name: 'ADD GRATUITY',
                        type: 'bar',
                        data: [-19896.22, -6473.72, -18192.17,-5824.69],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                    textStyle: {
                                        fontWeight: 500
                                    }
                                }
                            }
                        },

                    },
                                        
                    {
                        name: 'ORDEM ITEM',
                        type: 'bar',
                        data: [175797.73, 52041.43, 144413.61, 63222.98],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                    textStyle: {
                                        fontWeight: 500
                                    }
                                }
                            }
                        },

                    }],

            };



            // Apply options
            // ------------------------------

            basic_columns.setOption(basic_columns_options);
            basic_main.setOption(basic_main_options);
         


            // Resize charts
            // ------------------------------

            window.onresize = function () {
                setTimeout(function () {
                    basic_columns.resize();
                    basic_main.resize();

                }, 200);
            }
        }
    );
});
