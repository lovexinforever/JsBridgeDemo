$(function() {
    $('#openNewPage').on('click',
    function() {
        var obj = this;
        var curr_dom1 = $('#modulechoose');
        var headerUpdate1 = $("header p:eq(0)");
        var leftBtnDiv1 = $('header div:first');
        headerUpdate1.html('打开新网址demo');
        setTimeout(function() {
            curr_dom1.next().length == 0 ? curr_dom1.after('<div class="firstPage float stayOnRight"></div>') : curr_dom1.next();
            var next_dom = curr_dom1.next();
            // $('.addressImg').css('display', 'block');
            next_dom.load('manage/newpage.html',
            function() {
                curr_dom1.addClass('moveToLeft');
                next_dom.removeClass('stayOnRight');
                leftBtnDiv1.addClass('backImg');
            });
        },
        500);
    });
    $('#getLocation').on('click',
    function() {
        kuaiqian.getGeoPosition({

            isMust: '0',

            success: function(res) {
                alert(res.latitude + "---->> " + res.longitude);
            },

            error: function(res) {}
        });
    });

    $('#getIp').on('click',
    function() {
        kuaiqian.getIPAddress({

            success: function(res) {
                alert(res.ipAddress);
            },

            error: function(res) {}
        })
    });

    $('#getDeviceId').on('click',
    function() {
        kuaiqian.getDeviceId({

            success: function(res) {
                alert(res.deviceId);
            },

            error: function(res) {
                alert("err")
            }
        })
    });
	$('#close').on('click',
    function() {
        kuaiqian.goback({})
    });
	$('#getAccessToken').on('click',
    function() {
        kuaiqian.getAccessToken({

            success: function(res) {
                alert(res.accessToken);
            },

            error: function(res) {
                alert("err")
            }
        })
    });
	$('#getContacts').on('click',
    function() {
        kuaiqian.getContacts({

            success: function(res) {
                alert(res.phoneNo);
            },

            error: function(res) {
                alert("err")
            }
        })
    });
	$('#setTitle').on('click',
    function() {
         var obj = this;
        var curr_dom1 = $('#modulechoose');
        var headerUpdate1 = $("header p:eq(0)");
        var leftBtnDiv1 = $('header div:first');
        headerUpdate1.html('设置导航栏标题Demo');
        setTimeout(function() {
            curr_dom1.next().length == 0 ? curr_dom1.after('<div class="firstPage float stayOnRight"></div>') : curr_dom1.next();
            var next_dom = curr_dom1.next();
            // $('.addressImg').css('display', 'block');
            next_dom.load('manage/setTitle.html',
            function() {
                curr_dom1.addClass('moveToLeft');
                next_dom.removeClass('stayOnRight');
                leftBtnDiv1.addClass('backImg');
            });
        },
        500);
    });
	
    $('#call').on('click',
    function() {
        var obj = this;
        var curr_dom1 = $('#modulechoose');
        var headerUpdate1 = $("header p:eq(0)");
        var leftBtnDiv1 = $('header div:first');
        headerUpdate1.html('拨打电话Demo');
        setTimeout(function() {
            curr_dom1.next().length == 0 ? curr_dom1.after('<div class="firstPage float stayOnRight"></div>') : curr_dom1.next();
            var next_dom = curr_dom1.next();
            // $('.addressImg').css('display', 'block');
            next_dom.load('manage/call.html',
            function() {
                curr_dom1.addClass('moveToLeft');
                next_dom.removeClass('stayOnRight');
                leftBtnDiv1.addClass('backImg');
            });
        },
        500);
    });

    $('#pay').on('click',
    function() {
        var obj = this;
        var curr_dom1 = $('#modulechoose');
        var headerUpdate1 = $("header p:eq(0)");
        var leftBtnDiv1 = $('header div:first');
        headerUpdate1.html('统一支付Demo');
        setTimeout(function() {
            curr_dom1.next().length == 0 ? curr_dom1.after('<div class="firstPage float stayOnRight"></div>') : curr_dom1.next();
            var next_dom = curr_dom1.next();
            // $('.addressImg').css('display', 'block');
            next_dom.load('manage/pay.html',
            function() {
                curr_dom1.addClass('moveToLeft');
                next_dom.removeClass('stayOnRight');
                leftBtnDiv1.addClass('backImg');
            });
        },
        500);
    });
    $('#rightMenu').on('click',
    function() {
        var obj = this;
        var curr_dom1 = $('#modulechoose');
        var headerUpdate1 = $("header p:eq(0)");
        var leftBtnDiv1 = $('header div:first');
        headerUpdate1.html('导航栏右上角菜单Demo');
        setTimeout(function() {
            curr_dom1.next().length == 0 ? curr_dom1.after('<div class="firstPage float stayOnRight"></div>') : curr_dom1.next();
            var next_dom = curr_dom1.next();
            // $('.addressImg').css('display', 'block');
            next_dom.load('manage/rightMenu.html',
            function() {
                curr_dom1.addClass('moveToLeft');
                next_dom.removeClass('stayOnRight');
                leftBtnDiv1.addClass('backImg');
            });
        },
        500);
    });
    $('#share').on('click',
    function() {
        var obj = this;
        var curr_dom1 = $('#modulechoose');
        var headerUpdate1 = $("header p:eq(0)");
        var leftBtnDiv1 = $('header div:first');
        headerUpdate1.html('通用分享Demo');
        setTimeout(function() {
            curr_dom1.next().length == 0 ? curr_dom1.after('<div class="firstPage float stayOnRight"></div>') : curr_dom1.next();
            var next_dom = curr_dom1.next();
            // $('.addressImg').css('display', 'block');
            next_dom.load('manage/share.html',
            function() {
                curr_dom1.addClass('moveToLeft');
                next_dom.removeClass('stayOnRight');
                leftBtnDiv1.addClass('backImg');
            });
        },
        500);
    });
    $('#openNative').on('click',
    function() {
        var obj = this;
        var curr_dom1 = $('#modulechoose');
        var headerUpdate1 = $("header p:eq(0)");
        var leftBtnDiv1 = $('header div:first');
        headerUpdate1.html('打开Native页面Demo');
        setTimeout(function() {
            curr_dom1.next().length == 0 ? curr_dom1.after('<div class="firstPage float stayOnRight"></div>') : curr_dom1.next();
            var next_dom = curr_dom1.next();
            // $('.addressImg').css('display', 'block');
            next_dom.load('manage/openNative.html',
            function() {
                curr_dom1.addClass('moveToLeft');
                next_dom.removeClass('stayOnRight');
                leftBtnDiv1.addClass('backImg');
            });
        },
        500);
    });

    //动画
    setTimeout(function() {
        $('#openNewPage').addClass('trn_box');
        setTimeout(function() {
            $('#openNewPage').find('.listcontent').removeClass('listcontent_init');
            $('#getLocation').animate({
                'height': '80px'
            },
            350,
            function() {
                $(this).find('.listcontent').removeClass('listcontent_init');
                $('#getIp').animate({
                    'width': '100%'
                },
                350,
                function() {
                    $(this).find('.listcontent').removeClass('listcontent_init');
                    $('#getDeviceId').animate({
                        'width': '100%'
                    },
                    350,
                    function() {
                        $(this).find('.listcontent').removeClass('listcontent_init');
                        $('#call').animate({
                            'height': '80px'
                        },
                        350,
                        function() {
                            $(this).find('.listcontent').removeClass('listcontent_init');
                            $('#openNative').animate({
                                'width': '100%'
                            },
                            350,
                            function() {
                                $(this).find('.listcontent').removeClass('listcontent_init');
                                $('#pay').animate({
                                    'width': '100%'
                                },
                                350,
                                function() {
                                    $(this).find('.listcontent').removeClass('listcontent_init');
                                    $('#share').addClass('trn_box');
                                    setTimeout(function() {
                                        $('#share').find('.listcontent').removeClass('listcontent_init');
                                        $('#getAccessToken').animate({
                                            'height': '80px'
                                        },
                                        350,
                                        function() {
                                            $('#getAccessToken').find('.listcontent').removeClass('listcontent_init');
											$('#getContacts').animate({
                                            'height': '80px'
											},
											350,
											function() {
												$('#getContacts').find('.listcontent').removeClass('listcontent_init');
												$('#setTitle').animate({
													'height': '80px'
												},
												350,
												function() {
													$(this).find('.listcontent').removeClass('listcontent_init');
													$('#close').animate({
														'width': '100%'
													},
													350,
													function() {
														$(this).find('.listcontent').removeClass('listcontent_init');
													});
												});
											});
                                        });

                                    });
                                });
                            });
                        });
                    });
                });
            });
        },
        350);
    },
    300);

    var curr_dom = $('#index_page');
    var headerUpdate = $("header p:eq(0)");
    var leftBtnDiv = $('header div:first');
    var quickClickFlag = true;

    //返回按钮
    $('header div:first').on('click',
    function() {
        if (!quickClickFlag) {
            return;
        }
        quickClickFlag = false;
        setTimeout(function() {
            quickClickFlag = true;
        },
        500);
        var module_chooseDiv = $('#modulechoose');
        if (curr_dom.next().length == 0 && module_chooseDiv.next().length == 0) {

} else if (curr_dom.next().length == 0 && module_chooseDiv.next().length != 0) {
            headerUpdate.html('快钱JS使用指南Demo');
            module_chooseDiv.next().addClass('stayOnRight');
            module_chooseDiv.removeClass('moveToLeft');
            setTimeout(function() {
                module_chooseDiv.next().remove();
            },
            800);
            leftBtnDiv.removeClass('backImg');
        } else if (curr_dom.next().length != 0) {
            if ($('.modulechoose').length == 1) {
                curr_dom.next().addClass('stayOnRight');
                curr_dom.removeClass('moveToLeft');
                headerUpdate.html('快钱JS使用指南Demo');
                leftBtnDiv.removeClass('backImg');
                setTimeout(function() {
                    curr_dom.next().remove();
                },
                800);

            } else {
                module_chooseDiv.removeClass('moveToLeft');
                module_chooseDiv.next().addClass('stayOnRight');
                if (curr_dom.next().length == 0) {
                    headerUpdate.html('快钱JS使用指南Demo');
                }
                setTimeout(function() {
                    module_chooseDiv.next().remove();
                },
                800);

            };
            //			setTimeout(function() {
            //				var discarded_page = module_chooseDiv.next().length == 0 ? curr_dom.next() : module_chooseDiv.next();
            //				discarded_page.remove();
            //			}, 800);
        };
    });

});