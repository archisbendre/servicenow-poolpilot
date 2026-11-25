import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'a7ff6c0d070c46d68005e3c20ebba245'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '0d12685e7f404923b5c03f09afb1ce48'
                    }
                }
                composite: [
                    {
                        table: 'sys_ui_element'
                        id: '03d563dc45ca4d9e8c93247876d25243'
                        key: {
                            sys_ui_section: {
                                id: '9c6d836a8fda47b8b0a695b117108464'
                                key: {
                                    name: 'x_2325862_poolpi_0_server_pool'
                                    caption: 'Server Pool'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'port'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '04eef5f6c44f4a5eb17793c51eac9523'
                        key: {
                            name: 'x_2325862_poolpi_0_server_pool'
                            caption: 'Pool Members'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0b8b2f5b47444fbeae1dc3d2427d2df2'
                        key: {
                            sys_ui_section: {
                                id: 'cf2c4d2a0d5e40458c1cd36b6cf4ec61'
                                key: {
                                    name: 'x_2325862_poolpi_0_pool_member'
                                    caption: 'Pool Member'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'pool'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0ba24df3de6f42769b8e3a4734fb645c'
                        key: {
                            sys_ui_section: {
                                id: 'cf2c4d2a0d5e40458c1cd36b6cf4ec61'
                                key: {
                                    name: 'x_2325862_poolpi_0_pool_member'
                                    caption: 'Pool Member'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'port'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d34b8d7376c4ddaa474562075eeb952'
                        key: {
                            name: 'x_2325862_poolpi_0_server_pool'
                            element: 'vip'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0d58eed4c0e34703b885d97c7ae1e0e4'
                        key: {
                            sys_ui_section: {
                                id: 'cf2c4d2a0d5e40458c1cd36b6cf4ec61'
                                key: {
                                    name: 'x_2325862_poolpi_0_pool_member'
                                    caption: 'Pool Member'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '10effa11fca246838a539ea82d27566a'
                        key: {
                            name: 'x_2325862_poolpi_0_server_pool'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '158cc05d45e44c4ab8a66604487f9190'
                        key: {
                            sys_ui_section: {
                                id: 'cf2c4d2a0d5e40458c1cd36b6cf4ec61'
                                key: {
                                    name: 'x_2325862_poolpi_0_pool_member'
                                    caption: 'Pool Member'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'status'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1a44c8b4dfd2401da794dbccfedb4c54'
                        key: {
                            name: 'x_2325862_poolpi_0_pool_member'
                            element: 'status'
                            value: 'disabled'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '220c97490f381710f4dbbce300d1b2f2'
                        key: {
                            name: 'x_2325862_poolpi_0_pool_member'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '22ea9bab79134082a2c4f4669dd4869f'
                        key: {
                            name: 'x_2325862_poolpi_0_server_pool'
                            element: 'environment'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2446ae857d5c4bfea9c1c2d2c98dba98'
                        key: {
                            sys_security_acl: '33e7136a4ccc49c7aea91a10607f95b5'
                            sys_user_role: {
                                id: 'b546ffb0afea42c0aa430342a66ecb7c'
                                key: {
                                    name: 'x_2325862_poolpi_0.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '25428e38988147f1a018060662821e57'
                        key: {
                            name: 'x_2325862_poolpi_0_server_pool'
                            element: 'environment'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '257bab9b095340428309e265cac406b9'
                        key: {
                            name: 'x_2325862_poolpi_0_pool_member'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2d6dacc9a13e4e37a76fadc18521c03b'
                        key: {
                            sys_ui_section: {
                                id: '9c6d836a8fda47b8b0a695b117108464'
                                key: {
                                    name: 'x_2325862_poolpi_0_server_pool'
                                    caption: 'Server Pool'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '2fe2fdf39d3d4e109912dd605df0824b'
                        key: {
                            sys_ui_form: {
                                id: 'e3d159f6533748c7bc8e4ff8b9e306ad'
                                key: {
                                    name: 'x_2325862_poolpi_0_server_pool'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '04eef5f6c44f4a5eb17793c51eac9523'
                                key: {
                                    name: 'x_2325862_poolpi_0_server_pool'
                                    caption: 'Pool Members'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '30c091aedf554d37b4e9f829e706ef99'
                        key: {
                            sys_ui_section: {
                                id: 'cf2c4d2a0d5e40458c1cd36b6cf4ec61'
                                key: {
                                    name: 'x_2325862_poolpi_0_pool_member'
                                    caption: 'Pool Member'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'ip_address'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3dba7d0c3b524b9f923a2f2cb27edbc0'
                        key: {
                            name: 'x_2325862_poolpi_0_server_pool'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '417cbac8a3d9461bb8871f7bebd04f61'
                        key: {
                            sys_security_acl: '764ad8dc60274518a5ca98ba1407e422'
                            sys_user_role: {
                                id: 'b546ffb0afea42c0aa430342a66ecb7c'
                                key: {
                                    name: 'x_2325862_poolpi_0.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '424cc89188b640ce90b3aa7da4298b44'
                        key: {
                            name: 'x_2325862_poolpi_0_server_pool'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '476d1fefb22a41f9820ded155e2f3187'
                        key: {
                            name: 'x_2325862_poolpi_0_pool_member'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '526414bd88e649008d9ef61fa1fee2c8'
                        key: {
                            name: 'x_2325862_poolpi_0_server_pool'
                            element: 'port'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5910894464c34c269fd51ff8c537b2f3'
                        key: {
                            name: 'x_2325862_poolpi_0_server_pool'
                            element: 'environment'
                            value: 'dev'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5c9975e40a974c5db93f7e68d831a37c'
                        key: {
                            sys_ui_section: {
                                id: 'cf2c4d2a0d5e40458c1cd36b6cf4ec61'
                                key: {
                                    name: 'x_2325862_poolpi_0_pool_member'
                                    caption: 'Pool Member'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '60f465f8cb774fbd8fba7769627cba0e'
                        key: {
                            name: 'x_2325862_poolpi_0_server_pool'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '6218641e981545458a4c023b0258ed78'
                        key: {
                            name: 'x_2325862_poolpi_0_server_pool'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6241c98dd19c403e887c01b74c2e5fa9'
                        key: {
                            sys_ui_section: {
                                id: '9c6d836a8fda47b8b0a695b117108464'
                                key: {
                                    name: 'x_2325862_poolpi_0_server_pool'
                                    caption: 'Server Pool'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'vip'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6dd294ea5bbb4ae0b1347ca9b9b8eeed'
                        key: {
                            sys_ui_section: {
                                id: '04eef5f6c44f4a5eb17793c51eac9523'
                                key: {
                                    name: 'x_2325862_poolpi_0_server_pool'
                                    caption: 'Pool Members'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '12M.x_2325862_poolpi_0_server_pool.x_2325862_poolpi_0_pool_member.pool'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7af0559f1bf64163bf8c38d46ae1244d'
                        key: {
                            name: 'x_2325862_poolpi_0_pool_member'
                            element: 'pool'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7b2b390c3b5640c1b6a63179b05431a8'
                        key: {
                            name: 'x_2325862_poolpi_0_server_pool'
                            element: 'vip'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7ff2255d9fe64b12ae18f8e9e5dda9c0'
                        key: {
                            name: 'x_2325862_poolpi_0_pool_member'
                            element: 'ip_address'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '82e17bfbd6c94856ace87c54c79ed9e5'
                        key: {
                            sys_ui_form: {
                                id: 'e3d159f6533748c7bc8e4ff8b9e306ad'
                                key: {
                                    name: 'x_2325862_poolpi_0_server_pool'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '9c6d836a8fda47b8b0a695b117108464'
                                key: {
                                    name: 'x_2325862_poolpi_0_server_pool'
                                    caption: 'Server Pool'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '877d701a5dff4579a2261fdffeb22184'
                        key: {
                            name: 'x_2325862_poolpi_0_pool_member'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '8f195c987b3843118d8e137217addded'
                        key: {
                            logical_table_name: 'x_2325862_poolpi_0_pool_member'
                            col_name_string: 'pool'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '96729ad284de47b79d2bf2e4072d7900'
                        key: {
                            name: 'x_2325862_poolpi_0_server_pool'
                            element: 'environment'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9c1305d29a154934b9d8153008b53bb1'
                        key: {
                            name: 'x_2325862_poolpi_0_pool_member'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '9c6d836a8fda47b8b0a695b117108464'
                        key: {
                            name: 'x_2325862_poolpi_0_server_pool'
                            caption: 'Server Pool'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a078afed176e44a6af266c8e0e86da60'
                        key: {
                            sys_ui_section: {
                                id: '9c6d836a8fda47b8b0a695b117108464'
                                key: {
                                    name: 'x_2325862_poolpi_0_server_pool'
                                    caption: 'Server Pool'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'a0fa0a106d20485e8174984ed597052e'
                        key: {
                            name: 'x_2325862_poolpi_0_pool_member'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a2091a4338de4df68bebf9bc2a6993dd'
                        key: {
                            name: 'x_2325862_poolpi_0_server_pool'
                            element: 'port'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a824f04ec5e945cd9240daddfaacaa5d'
                        key: {
                            sys_ui_section: {
                                id: '9c6d836a8fda47b8b0a695b117108464'
                                key: {
                                    name: 'x_2325862_poolpi_0_server_pool'
                                    caption: 'Server Pool'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a860aa0849b9484785e4a18bd3f4bc90'
                        key: {
                            name: 'x_2325862_poolpi_0_pool_member'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ae6bb838c45a4e67bb4096f6866d1912'
                        key: {
                            name: 'x_2325862_poolpi_0_server_pool'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'af7195092bad4664aa5920166e30f49f'
                        key: {
                            name: 'x_2325862_poolpi_0_pool_member'
                            element: 'port'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b1c28d7a524444848bccfa73f0c87bbd'
                        key: {
                            sys_ui_section: {
                                id: '9c6d836a8fda47b8b0a695b117108464'
                                key: {
                                    name: 'x_2325862_poolpi_0_server_pool'
                                    caption: 'Server Pool'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'environment'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'b546ffb0afea42c0aa430342a66ecb7c'
                        key: {
                            name: 'x_2325862_poolpi_0.user'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b70d96f59d2e4c0f93adf1f1a4cf2246'
                        key: {
                            name: 'x_2325862_poolpi_0_pool_member'
                            element: 'port'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b92fb73296004d72b2597d63b0077791'
                        key: {
                            sys_ui_section: {
                                id: '9c6d836a8fda47b8b0a695b117108464'
                                key: {
                                    name: 'x_2325862_poolpi_0_server_pool'
                                    caption: 'Server Pool'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'c014428c02c648e9a6ce770b5e0adc62'
                        key: {
                            sys_ui_form: {
                                id: '476d1fefb22a41f9820ded155e2f3187'
                                key: {
                                    name: 'x_2325862_poolpi_0_pool_member'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'cf2c4d2a0d5e40458c1cd36b6cf4ec61'
                                key: {
                                    name: 'x_2325862_poolpi_0_pool_member'
                                    caption: 'Pool Member'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c16dcc9397604ef28ea4f0f44d5d24e1'
                        key: {
                            name: 'x_2325862_poolpi_0_pool_member'
                            element: 'status'
                            value: 'enabled'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c8681b8843914465b8c0f187150fa032'
                        key: {
                            sys_ui_section: {
                                id: 'cf2c4d2a0d5e40458c1cd36b6cf4ec61'
                                key: {
                                    name: 'x_2325862_poolpi_0_pool_member'
                                    caption: 'Pool Member'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ccd54f4f3c734373b9e4e1efcd346b40'
                        key: {
                            name: 'x_2325862_poolpi_0_server_pool'
                            element: 'environment'
                            value: 'prod'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'cf2c4d2a0d5e40458c1cd36b6cf4ec61'
                        key: {
                            name: 'x_2325862_poolpi_0_pool_member'
                            caption: 'Pool Member'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'dbbd21e89a644aa4a200f4cdf9d8f43b'
                        key: {
                            sys_ui_section: {
                                id: '9c6d836a8fda47b8b0a695b117108464'
                                key: {
                                    name: 'x_2325862_poolpi_0_server_pool'
                                    caption: 'Server Pool'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e0e13d6d5421401790a5773355e1efff'
                        key: {
                            name: 'x_2325862_poolpi_0_pool_member'
                            element: 'ip_address'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'e3d159f6533748c7bc8e4ff8b9e306ad'
                        key: {
                            name: 'x_2325862_poolpi_0_server_pool'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e41abe6227d347e88c0b52fac8198b58'
                        key: {
                            name: 'x_2325862_poolpi_0_pool_member'
                            element: 'pool'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'f7ba1f850f381710f4dbbce300d1b205'
                        key: {
                            name: 'x_2325862_poolpi_0_server_pool'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f8078505f1744762aeaf3f7c2f0830a3'
                        key: {
                            name: 'x_2325862_poolpi_0_server_pool'
                            element: 'environment'
                            value: 'test'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fb33cd20a2be46c79f58c5060915fc7e'
                        key: {
                            name: 'x_2325862_poolpi_0_pool_member'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ffebd65790024959a018b03983c1fe83'
                        key: {
                            name: 'x_2325862_poolpi_0_server_pool'
                            element: 'name'
                        }
                    },
                ]
            }
        }
    }
}
