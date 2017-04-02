# Fluid base
lib.fluidGrid = FLUIDTEMPLATE
lib.fluidGrid {
    templateName = Default
    layoutRootPaths {
        0 = EXT:tirs_foundation/Resources/Private/Layouts/GridElements
        10 = {$tirs_foundation.templates.gridelements.layoutRootPath}
    }
    partialRootPaths {
        0 = EXT:tirs_foundation/Resources/Private/Partials/GridElements
        10 = {$tirs_foundation.templates.gridelements.partialRootPath}
    }
    templateRootPaths {
        0 = EXT:tirs_foundation/Resources/Private/Templates/GridElements
        10 = {$tirs_foundation.templates.gridelements.templateRootPath}
    }
}

# Grid Elements setup
lib.gridelements.defaultGridSetup.columns.2 >

/**
* Grid definitions
*/
lib.foundationGrids {

    # Column grids
    2cols < lib.gridelements.defaultGridSetup
    2cols {
        cObject =< lib.fluidGrid
        cObject {
            templateName = TwoColumn

            variables {
                xsCol1 = TEXT
                xsCol1.data = field:flexform_xsCol1

                xsCol2 = TEXT
                xsCol2.data = field:flexform_xsCol2

                smCol1 = TEXT
                smCol1.data = field:flexform_smCol1

                smCol2 = TEXT
                smCol2.data = field:flexform_smCol2

                mdCol1 = TEXT
                mdCol1.data = field:flexform_mdCol1

                mdCol2 = TEXT
                mdCol2.data = field:flexform_mdCol2

                lgCol1 = TEXT
                lgCol1.data = field:flexform_lgCol1

                lgCol2 = TEXT
                lgCol2.data = field:flexform_lgCol2

                col21class = TEXT
                col21class.data = field:flexform_col21class

                col22class = TEXT
                col22class.data = field:flexform_col22class

                collapse = TEXT
                collapse.data = field:flexform_collapse

                collapseOnSmall = TEXT
                collapseOnSmall.data = field:flexform_collapseOnSmall

                equalizeColumns = TEXT
                equalizeColumns.data = field:flexform_equalizeColumns
            }
        }

    }
    3cols < .2cols
    3cols {
        cObject {
            templateName = ThreeColumn
            variables {
                xsCol3 = TEXT
                xsCol3.data = field:flexform_xsCol3

                smCol3 = TEXT
                smCol3.data = field:flexform_smCol3

                mdCol3 = TEXT
                mdCol3.data = field:flexform_mdCol3

                lgCol3 = TEXT
                lgCol3.data = field:flexform_lgCol3

                col31class = TEXT
                col31class.data = field:flexform_col31class

                col32class = TEXT
                col32class.data = field:flexform_col32class

                col33class = TEXT
                col33class.data = field:flexform_col33class
            }
        }
    }
    4cols < .3cols
    4cols {
        cObject {
            templateName = FourColumn
            variables {
                xsCol4 = TEXT
                xsCol4.data = field:flexform_xsCol4

                smCol4 = TEXT
                smCol4.data = field:flexform_smCol4

                mdCol4 = TEXT
                mdCol4.data = field:flexform_mdCol4

                lgCol4 = TEXT
                lgCol4.data = field:flexform_lgCol4

                col41class = TEXT
                col41class.data = field:flexform_col41class

                col42class = TEXT
                col42class.data = field:flexform_col42class

                col43class = TEXT
                col43class.data = field:flexform_col43class

                col44class = TEXT
                col44class.data = field:flexform_col44class
            }
        }
    }
    5cols < .4cols
    5cols {
        cObject {
            templateName = FiveColumn
            variables {
                xsCol5 = TEXT
                xsCol5.data = field:flexform_xsCol5

                smCol5 = TEXT
                smCol5.data = field:flexform_smCol5

                mdCol5 = TEXT
                mdCol5.data = field:flexform_mdCol5

                lgCol5 = TEXT
                lgCol5.data = field:flexform_lgCol5

                col51class = TEXT
                col51class.data = field:flexform_col51class

                col52class = TEXT
                col52class.data = field:flexform_col52class

                col53class = TEXT
                col53class.data = field:flexform_col53class

                col54class = TEXT
                col54class.data = field:flexform_col54class

                col55class = TEXT
                col55class.data = field:flexform_col55class
            }
        }
    }

    # simple row for content elements and usage with ext:bscolwrap
    simpleRow < lib.gridelements.defaultGridSetup
    simpleRow {
        # row wrap
        wrap = <div class="row">|</div>
        columns {
            # special 111, used as check for conditional fields
            111 < .default
            111.wrap = |
        }
    }

    # Accordion
    accordion  < lib.gridelements.defaultGridSetup
    accordion {

        # wrap each element
        columns {
            101 {
                /*
                renderObj = COA
                renderObj {
                    5 = TEXT
                    5.value = <a class="accordion-title">TEST</a>
                    10 =< tt_content
                    10.stdWrap.wrap = <div class="accordion-content" data-tab-content>|</div>
                    wrap = <li class="accordion-item" data-accordion-item>|</li>
                }
                */
                renderObj =< tt_content
            }
        }

        cObject =< lib.fluidGrid
        cObject {
            templateName = Accordion
            variables {
                expandFirst = TEXT
                expandFirst.data = field:flexform_expandFirst

            }
        }
    }

    # Slick slider
    slick  < lib.gridelements.defaultGridSetup
    slick {
        cObject =< lib.fluidGrid
        cObject {
            templateName = Slick
            variables {
                accessibility = TEXT
                accessibility.data = field:flexform_accessibility

                adaptiveHeight = TEXT
                adaptiveHeight.data = field:flexform_adaptiveHeight

                autoplay = TEXT
                autoplay.data = field:flexform_autoplay

                autoplaySpeed = TEXT
                autoplaySpeed.data = field:flexform_autoplaySpeed

                arrows = TEXT
                arrows.data = field:flexform_arrows

                asNavFor = TEXT
                asNavFor.data = field:flexform_asNavFor

                appendArrows = TEXT
                appendArrows.data = field:flexform_appendArrows

                prevArrow = TEXT
                prevArrow.data = field:flexform_prevArrow

                nextArrow = TEXT
                nextArrow.data = field:flexform_nextArrow

                centerMode = TEXT
                centerMode.data = field:flexform_centerMode

                centerPadding = TEXT
                centerPadding.data = field:flexform_centerPadding

                cssEase = TEXT
                cssEase.data = field:flexform_cssEase

                customPaging = TEXT
                customPaging.data = field:flexform_customPaging

                dots = TEXT
                dots.data = field:flexform_dots

                draggable = TEXT
                draggable.data = field:flexform_draggable

                fade = TEXT
                fade.data = field:flexform_fade

                focusOnSelect = TEXT
                focusOnSelect.data = field:flexform_focusOnSelect

                easing = TEXT
                easing.data = field:flexform_easing

                edgeFriction = TEXT
                edgeFriction.data = field:flexform_edgeFriction

                initialSlide = TEXT
                initialSlide.data = field:flexform_initialSlide

                lazyLoad = TEXT
                lazyLoad.data = field:flexform_lazyLoad

                mobileFirst = TEXT
                mobileFirst.data = field:flexform_mobileFirst

                pauseOnHover = TEXT
                pauseOnHover.data = field:flexform_pauseOnHover

                pauseOnDotsHover = TEXT
                pauseOnDotsHover.data = field:flexform_pauseOnDotsHover

                respondTo = TEXT
                respondTo.data = field:flexform_respondTo

                responsive = TEXT
                responsive.data = field:flexform_responsive

                rows = TEXT
                rows.data = field:flexform_rows

                slide = TEXT
                slide.data = field:flexform_slide

                slidesPerRow = TEXT
                slidesPerRow.data = field:flexform_slidesPerRow

                slidesToShow = TEXT
                slidesToShow.data = field:flexform_slidesToShow

                slidesToScroll = TEXT
                slidesToScroll.data = field:flexform_slidesToScroll

                speed = TEXT
                speed.data = field:flexform_speed

                swipe = TEXT
                swipe.data = field:flexform_swipe

                swipesToSlide = TEXT
                swipesToSlide.data = field:flexform_swipesToSlide

                touchMove = TEXT
                touchMove.data = field:flexform_touchMove

                touchThreShold = TEXT
                touchThreShold.data = field:flexform_touchThreShold

                useCSS = TEXT
                useCSS.data = field:flexform_useCSS

                variableWidth = TEXT
                variableWidth.data = field:flexform_variableWidth

                vertical = TEXT
                vertical.data = field:flexform_vertical

                verticalWrapping = TEXT
                verticalWrapping.data = field:flexform_verticalWrapping

                verticalSwiping = TEXT
                verticalSwiping.data = field:flexform_verticalSwiping

                rtl = TEXT
                rtl.data = field:flexform_rtl
            }
        }
    }
    # Section
    section < lib.gridelements.defaultGridSetup
    section {
        cObject =< lib.fluidGrid
        cObject {
            templateName = Section
            variables {
                expanded = TEXT
                expanded.data = field:flexform_expanded
            }

        }
    }
}


/**
* Assign foundation grid elements to gridelements extension
*/
tt_content.gridelements_pi1.20.10.setup {
    2cols < lib.foundationGrids.2cols
    3cols < lib.foundationGrids.3cols
    4cols < lib.foundationGrids.4cols
    5cols < lib.foundationGrids.5cols
    accordion < lib.foundationGrids.accordion
    slick < lib.foundationGrids.slick
    xSimpleRow < lib.foundationGrids.simpleRow
    section < lib.foundationGrids.section
}

