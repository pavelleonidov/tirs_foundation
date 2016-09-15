mod {
    web_layout {
        BackendLayouts {
            TwoColumn {
                title = Two Column Layout
                config {
                    backend_layout {
                        colCount = 2
                        rowCount = 2
                        rows {
                            1 {
                                columns {
                                    1 {
                                        name = Visual
                                        colPos = 1
                                    }
                                }
                            }
                            2 {
                                columns {
                                    1 {
                                        name = Content
                                        colPos = 0
                                    }
                                    2 {
                                        name = Sidebar
                                        colPos = 2
                                    }
                                }
                            }
                        }
                    }
                }
            }
            ThreeColumn {
                title = Three Column Layout
                config {
                    backend_layout {
                        colCount = 3
                        rowCount = 1
                        rows {
                            1 {
                                columns {
                                    1 {
                                        name = Visual
                                        colPos = 1
                                    }
                                }
                            }
                            2 {
                                columns {
                                    1 {
                                        name = Sidebar Left
                                        colPos = 3
                                    }
                                    2 {
                                        name = Content
                                        colPos = 0
                                    }
                                    3 {
                                        name = Sidebar Right
                                        colPos = 2
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}