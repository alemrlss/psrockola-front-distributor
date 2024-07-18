// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const storedLanguage = localStorage.getItem("language");
console.log(storedLanguage);

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        psrockola_owner: "Owner",
        psrockola_employee: "Employee",
        psrockola_distributor: "Distributor",
        psrockola_subcompany: "Subcompany",
        psrockola_wallet: "Wallet",
        psrockola_appbar_expire: "Expire",
        psrockola_appbar_role_company: "Company",
        psrockola_appbar_role_employee: "Employee",
        psrockola_appbar_role_distributor: "Distributor",
        psrockola_appbar_role_subcompany: "Subcompany",
        menu_dashboard: "Dashboard",
        menu_transactions: "Transactions",
        menu_screens: "Screens",
        menu_currentplays: "Current Plays",
        menu_membership: "Memberships",
        menu_rockobits: "Rockobits",
        menu_employees: "Employees",
        menu_create: "Create",
        menu_list: "List",
        menu_transfer: "Transfer",
        menu_memberships_get: "Get",
        menu_memberships_cancel: "Cancel",
        menu_buy: "Buy",
        menu_sale: "Sales",
        menu_qr: "QR",
        menu_help: "Help",
        menu_subcompanies: "Subcompanies",
        language_snackbar_message: "Language changed successfully",
        language_snackbar_error: "Error changing language",
        view_dashboard_welcome: "Welcome, ",
        view_dashboard_top_10_transfers:
          "Top 10 Transfers Rockobits by Subcompany",
        view_dashboard_top_10_reproductions:
          "Top 10 Reproductions by Subcompany",
        view_dashboard_last_pay_transactions: "Last Pay Transactions",
        view_dashboard_no_transactions: "No transactions found",
        view_dashboard_reproductions: "Reproductions",
        view_dashboard_table_date: "Date",
        view_dashboard_table_type: "Type",
        view_dashboard_table_amount: "Amount",
        view_dashboard_table_distributor: "Distributor",
        view_dashboard_table_user: "User",
        view_dashboard_sales: "Sales",
        view_dashboard_count_sales: "Count Sales",
        view_dashboard_total_sales: "Total Sales",
        view_dashboard_sales_own: "Own Sales",
        view_dashboard_screens_reproductions: "Screens Reproductions",
        view_dashboard_employees_sales: "Employees Sales",
        view_dashboard_last_rockobits_transactions:
          "Last Rockobits Transactions",
        view_dashboard_type_distributor_buy: "Buy",
        view_dashboard_type_distributor_buy_membership: "Buy Membership",
        view_dashboard_type_company_transfer_to_client:
          "Transfer Rockobits to Client",
        view_dashboard_type_company_transfer_to_employee:
          "Transfer Rockobits to Employee",
        view_dashboard_type_company_claim_qr: "Claim QR Code",
        view_dashboard_type_company_revoke_all: "Revoke Employee Rockobits",
        view_dashboard_type_company_buy: "Buy",
        view_memberships: "Memberships",
        view_memberships_card_get: "Get",
        view_memberships_card_month: "month",
        view_memberships_card_year: "year",
        view_memberships_card_employees: "for employees",
        view_memberships_card_employees_account_singular: "account",
        view_memberships_card_employees_account_plural: "accounts",
        view_memberships_card_skins_singular: "skin available",
        view_memberships_card_skins_plural: "skins available",
        view_memberships_card_screens_start: "1 Screen (Maximum",
        view_memberships_card_screens_end: "Screens)",
        monthly_memberships: "Monthly",
        yearly_memberships: "Yearly",
        view_employees_create_title: "Create Employee",
        view_employees_create_limit: "Employees Limit",
        view_employees_create_name: "Name",
        view_employees_create_lastname: "Last Name",
        view_employees_create_email: "Email",
        view_employees_create_password: "Password",
        view_employees_create_address: "Address",
        view_employees_create_phone: "Phone",
        view_employees_create_photo: "Photo",
        view_employees_create_button: "Create",
        view_employees_create_loading: "Creating employee..",
        view_employees_list_limit: "Limit",
        view_employees_list_employees: "Employees",
        view_employees_list_name: "Name",
        view_employees_list_lastname: "Last Name",
        view_employees_list_email: "Email",
        view_employees_list_phone: "Phone",
        view_employees_list_address: "Address",
        view_employees_list_wallet: "Wallet",
        view_employees_list_playlist: "Playlist permission",
        view_employees_list_actions: "Actions",
        view_employees_list_not_found: "No employees found",
        view_employees_list_edit: "Edit",
        view_employees_list_delete: "Delete",
        view_employees_list_claim: "Claim RB",
        view_employees_list_transactions: "Transactions",
        view_employees_list_edit_tab_edit: "Edit",
        view_employees_list_edit_tab_password: "Change Password",
        view_employees_list_edit_tab_photo: "Change Photo",
        view_employees_list_edit_tab_edit_name: "Name",
        view_employees_list_edit_tab_edit_lastname: "Last Name",
        view_employees_list_edit_tab_edit_email: "Email",
        view_employees_list_edit_tab_edit_address: "Address",
        view_employees_list_edit_tab_edit_phone: "Phone",
        view_employees_list_edit_tab_edit_button: "Save",
        view_employees_list_edit_tab_password_password: "Password",
        view_employees_list_edit_tab_password_confirm_password:
          "Confirm Password",
        view_employees_list_edit_tab_password_button: "Change",
        view_employees_list_edit_tab_photo_title: "Change Profile Photo",
        view_employees_list_edit_tab_photo_upload: "Upload photo",
        view_employees_list_edit_tab_photo_button: "Change",
        view_employees_list_delete_title: "Confirm deletion",
        view_employees_list_delete_message:
          "Are you sure you want to delete this employee?",
        view_employees_list_delete_button_cancel: "Cancel",
        view_employees_list_delete_button_delete: "Delete",
        view_screens_count: "Screens",
        view_screens_limit: "Limit",
        view_screens_active: "Active",
        view_screens_add_button: "Add Screen",
        view_screens_edit: "Edit",
        view_screens_edit_name: "Edit Name",
        view_screens_edit_name_name: "Screen Name",
        view_screens_edit_button_save: "Save Changes",
        view_screens_edit_change_password: "Change Password",
        view_screens_edit_password: "Password",
        view_screens_edit_password_confirm: "Confirm Password",
        view_screens_create: "Create Screen",
        view_screens_create_name: "Screen Name",
        view_screens_create_password: "Password",
        view_screens_create_save: "Create",
        view_rockobits_title: "Rockobits Packages",
        view_rockobits_wallet: "Wallet",
        view_rockobits_card_price: "Price",
        view_rockobtis_card_buy: "Buy",
        view_rockobits_sale_title: "Rockobits Sales",
        view_rockobits_sale_email: "Email",
        view_rockobits_sale_quantity: "Rockobits Quantity",
        view_rockobits_sale_payment: "Payment Method",
        view_rockobits_sale_cash: "Cash",
        view_rockobits_sale_transfer: "Transfer",
        view_rockobits_sale_next: "Next",
        view_rockobits_sale_upload: "Upload voucher of bank transfer",
        view_rockobits_modal_title: "Client information",
        view_rockobits_modal_name: "Name",
        view_rockobits_modal_email: "Email",
        view_rockobits_modal_amount: "Transaction amount",
        view_rockobits_modal_button_sale: "Sale",
        view_rockobits_modal_button_cancel: "Cancel",
        view_rockobits_qr_title: "Generate QR code",
        view_rockobits_qr_amount: "Amount Rockobits",
        view_rockobits_qr_expire: "Expire date",
        view_rockobits_qr_1_minute: "1 minute",
        view_rockobits_qr_1_hour: "1 hour",
        view_rockobits_qr_3_hour: "3 hour",
        view_rockobits_qr_1_day: "1 day",
        view_rockobits_qr_button: "Generate QR",
        view_rockobits_qr_codes: "QR Codes",
        view_rockobits_qr_codes_active: "Active",
        view_rockobits_qr_codes_inactive: "Inactive",
        view_rockobits_qr_codes_consumed: "Consumed",
        view_rockobits_qr_codes_expired: "Expired",
        view_rockobits_qr_codes_all: "All",
        view_rockobits_qr_codes_table_created: "Creation date",
        view_rockobits_qr_codes_table_amount: "Rockobits amount",
        view_rockobits_qr_codes_table_expire: "Expiration date",
        view_rockobits_qr_codes_table_state: "State",
        view_rockobits_qr_codes_table_notfound: "No QR codes found",
        view_rockobits_qr_codes_table_showqr: "Show QR",
        view_rockobits_qr_code_state_active: "Active",
        view_rockobits_qr_code_state_inactive: "Inactive",
        view_rockobits_qr_code_state_consumed: "Consumed",
        view_rockobits_qr_code_state_expired: "Expired",
        view_rockobis_qr_code_state_uknown: "Uknown",
        view_subcompanies_create_title: "Create Subcompany",
        view_subcompanies_create_limit_part_1: "You have a limit of",
        view_subcompanies_create_limit_part_2: "Accounts",
        view_subcompanies_create_name: "Name",
        view_subcompanies_create_email: "Email",
        view_subcompanies_create_password: "Password",
        view_subcompanies_create_address: "Address",
        view_subcompanies_create_phone: "Phone",
        view_subcompanies_create_postalCode: "Postal Code",
        view_subcompanies_list_title: "Subcompanies",
        view_subcompanies_list_table_photo: "Photo",
        view_subcompanies_list_table_name: "Name",
        view_subcompanies_list_table_email: "Email",
        view_subcompanies_list_table_address: "Address",
        view_subcompanies_list_table_phone: "Phone",
        view_subcompanies_list_table_state: "State",
        view_subcompanies_list_table_actions: "Actions",
        view_subcompanies_list_table_notfound: "No subcompanies found",
        view_subcompanies_list_states_active: "Active",
        view_subcompanies_list_states_inactive: "Inactive",
        view_subcompanies_list_states_banned: "Banned",
        view_subcompanies_list_editInfo: "Edit Info",
        view_subcompanies_list_change_paswword: "Change Password",
        view_subcompanies_list_change_photo: "Change Photo",
        view_subcompanies_list_editInfo_name: "Name",
        view_subcompanies_list_editInfo_email: "Email",
        view_subcompanies_list_editInfo_address: "Address",
        view_subcompanies_list_editInfo_phone: "Phone",
        view_subcompanies_list_editInfo_save: "Save Changes",
        view_subcompanies_list_editInfo_saving: "Saving changes..",
        view_subcompanies_list_editInfo_close: "Close",
        view_subcompanies_list_change_paswword_password: "New Password",
        view_subcompanies_list_change_paswword_password_confirm:
          "Confirm Password",
        view_subcompanies_list_change_paswword_password_button: "Change",
        view_subcompanies_list_change_paswword_password_button_changing:
          "Changing..",
        view_subcompanies_list_change_photo_title: "Change Profile Photo",
        view_subcompanies_list_change_photo_upload: "Change",
        view_subcompanies_list_change_photo_select: "Select photo",
        view_subcompanies_list_cancel: "Cancel",
        view_logout: "Logout",
        view_transactions_pay: "Pay",
        view_transactions_pay_loading: "Loading...",
        view_transactions_pay_no_transactions: "No transactions found",
        view_transactions_table_date: "Date",
        view_transactions_table_type: "Type",
        view_transactions_table_amount: "Amount",
        view_transactions_table_user: "User",
        
      },
    },
    es: {
      translation: {
        psrockola_owner: "Dueño",
        psrockola_employee: "Empleado",
        psrockola_distributor: "Distribuidor",
        psrockola_subcompany: "Subempresa",
        psrockola_wallet: "Billetera",
        psrockola_appbar_expire: "Expira",
        psrockola_appbar_role_company: "Empresa",
        psrockola_appbar_role_employee: "Empleado",
        psrockola_appbar_role_distributor: "Distribuidor",
        psrockola_appbar_role_subcompany: "Subempresa",
        menu_dashboard: "Panel",
        menu_transactions: "Transacciones",
        menu_screens: "Pantallas",
        menu_currentplays: "Reproducciones actuales",
        menu_membership: "Membresias",
        menu_rockobits: "Rockobits",
        menu_employees: "Empleados",
        menu_create: "Crear",
        menu_list: "Lista",
        menu_transfer: "Transferir",
        menu_memberships_get: "Obtener",
        menu_memberships_cancel: "Cancelar",
        menu_buy: "Comprar",
        menu_sale: "Ventas",
        menu_qr: "QR",
        menu_help: "Ayuda",
        menu_subcompanies: "Subempresas",
        language_snackbar_message: "Idioma cambiado con éxito",
        language_snackbar_error: "Error al cambiar el idioma",
        view_dashboard_welcome: "Bienvenido, ",
        view_dashboard_top_10_transfers:
          "Top 10 Transferencias Rockobits por Subempresa",
        view_dashboard_top_10_reproductions:
          "Top 10 Reproducciones por Subempresa",
        view_dashboard_last_pay_transactions: "Ultimas Transacciones de Pago",
        view_dashboard_no_transactions: "No hay transacciones",
        view_dashboard_reproductions: "Reproducciones",
        view_dashboard_table_date: "Fecha",
        view_dashboard_table_type: "Tipo",
        view_dashboard_table_amount: "Monto",
        view_dashboard_table_distributor: "Distribuidor",
        view_dashboard_table_user: "Usuario",
        view_dashboard_sales: "Ventas",
        view_dashboard_count_sales: "Cuenta de Ventas",
        view_dashboard_total_sales: "Total de Ventas",
        view_dashboard_sales_own: "Ventas Propias",
        view_dashboard_screens_reproductions: "Reproducciones de Pantallas",
        view_dashboard_employees_sales: "Ventas de Empleados",
        view_dashboard_last_rockobits_transactions:
          "Ultimas transacciones de rockobits",
        view_dashboard_type_distributor_buy: "Compra de",
        view_dashboard_type_distributor_buy_membership: "Compra de Membresia",
        view_dashboard_type_company_transfer_to_client:
          "Transferencia de Rockobits a Cliente",
        view_dashboard_type_company_transfer_to_employee:
          "Transferencia de Rockobits a Empleado",
        view_dashboard_type_company_claim_qr: "Reclamo de codigo QR",
        view_dashboard_type_company_revoke_all:
          "Revocacion de Rockobits de Empleado",
        view_dashboard_type_company_buy: "Compra de",
        view_memberships: "Membresías",
        view_memberships_card_get: "Obtener",
        view_memberships_card_month: "mes",
        view_memberships_card_year: "año",
        view_memberships_card_employees: "para empleados",
        view_memberships_card_employees_account_singular: "cuenta",
        view_memberships_card_employees_account_plural: "cuentas",
        view_memberships_card_skins_singular: "skin disponible",
        view_memberships_card_skins_plural: "skins disponibles",
        view_memberships_card_screens_start: "1 Pantalla (Máximo",
        view_memberships_card_screens_end: "Pantallas)",
        monthly_memberships: "Mensual",
        yearly_memberships: "Anual",
        view_employees_create_title: "Crear Empleado",
        view_employees_create_limit: "Límite de Empleados",
        view_employees_create_name: "Nombre",
        view_employees_create_lastname: "Apellido",
        view_employees_create_email: "Correo Electrónico",
        view_employees_create_password: "Contraseña",
        view_employees_create_address: "Dirección",
        view_employees_create_phone: "Teléfono",
        view_employees_create_photo: "Foto",
        view_employees_create_button: "Crear",
        view_employees_create_loading: "Creando empleado..",
        view_employees_list_limit: "Límite",
        view_employees_list_employees: "Empleados",
        view_employees_list_name: "Nombre",
        view_employees_list_lastname: "Apellido",
        view_employees_list_email: "Correo Electrónico",
        view_employees_list_phone: "Teléfono",
        view_employees_list_address: "Dirección",
        view_employees_list_wallet: "Billetera",
        view_employees_list_playlist: "Permiso de lista de reproducción",
        view_employees_list_actions: "Acciones",
        view_employees_list_not_found: "No se encontraron empleados",
        view_employees_list_edit: "Editar",
        view_employees_list_delete: "Eliminar",
        view_employees_list_claim: "Reclamar RB",
        view_employees_list_transactions: "Transacciones",
        view_employees_list_edit_tab_edit: "Editar",
        view_employees_list_edit_tab_password: "Cambiar Contraseña",
        view_employees_list_edit_tab_photo: "Cambiar Foto",
        view_employees_list_edit_tab_edit_name: "Nombre",
        view_employees_list_edit_tab_edit_lastname: "Apellido",
        view_employees_list_edit_tab_edit_email: "Correo Electrónico",
        view_employees_list_edit_tab_edit_address: "Dirección",
        view_employees_list_edit_tab_edit_phone: "Teléfono",
        view_employees_list_edit_tab_edit_button: "Guardar",
        view_employees_list_edit_tab_password_password: "Contraseña",
        view_employees_list_edit_tab_password_confirm_password:
          "Confirmar Contraseña",
        view_employees_list_edit_tab_password_button: "Cambiar",
        view_employees_list_edit_tab_photo_title: "Cambiar foto de perfil",
        view_employees_list_edit_tab_photo_upload: "Subir foto",
        view_employees_list_edit_tab_photo_button: "Cambiar",
        view_employees_list_delete_title: "Confirmar eliminacion",
        view_employees_list_delete_message:
          "¿Estás seguro de que quieres eliminar este empleado?",
        view_employees_list_delete_button_cancel: "Cancelar",
        view_employees_list_delete_button_delete: "Eliminar",
        view_screens_count: "Pantallas",
        view_screens_limit: "Limite",
        view_screens_active: "Activas",
        view_screens_add_button: "Agregar Pantalla",
        view_screens_edit: "Editar",
        view_screens_edit_name: "Editar Nombre",
        view_screens_edit_name_name: "Nombre de Pantalla",
        view_screens_edit_button_save: "Guardar Cambios",
        view_screens_edit_change_password: "Cambiar Contraseña",
        view_screens_edit_password: "Contraseña",
        view_screens_edit_password_confirm: "Confirmar Contraseña",
        view_screens_create: "Crear Pantalla",
        view_screens_create_name: "Nombre de Pantalla",
        view_screens_create_password: "Contraseña",
        view_screens_create_save: "Crear",
        view_rockobits_title: "Paquetes de Rockobits",
        view_rockobits_wallet: "Billetera",
        view_rockobits_card_price: "Precio",
        view_rockobtis_card_buy: "Comprar",
        view_rockobits_sale_title: "Ventas de Rockobits",
        view_rockobits_sale_email: "Correo Electrónico",
        view_rockobits_sale_quantity: "Cantidad de Rockobits",
        view_rockobits_sale_payment: "Método de Pago",
        view_rockobits_sale_cash: "Efectivo",
        view_rockobits_sale_transfer: "Transferencia",
        view_rockobits_sale_next: "Siguiente",
        view_rockobits_sale_upload: "Subir voucher de transferencia bancaria",
        view_rockobits_modal_title: "Informacion del cliente",
        view_rockobits_modal_name: "Nombre",
        view_rockobits_modal_email: "Correo Electrónico",
        view_rockobits_modal_amount: "Monto de la transaccion",
        view_rockobits_modal_button_sale: "Vender",
        view_rockobits_modal_button_cancel: "Cancelar",
        view_rockobits_qr_title: "Generar codigo QR",
        view_rockobits_qr_amount: "Monto Rockobits",
        view_rockobits_qr_expire: "Fecha de expiracion",
        view_rockobits_qr_1_minute: "1 minuto",
        view_rockobits_qr_1_hour: "1 hora",
        view_rockobits_qr_3_hour: "3 horas",
        view_rockobits_qr_1_day: "1 dia",
        view_rockobits_qr_button: "Generar QR",
        view_rockobits_qr_codes: "QR Codigos",
        view_rockobits_qr_codes_active: "Activos",
        view_rockobits_qr_codes_inactive: "Inactivos",
        view_rockobits_qr_codes_consumed: "Consumidos",
        view_rockobits_qr_codes_expired: "Expirados",
        view_rockobits_qr_codes_all: "Todos",
        view_rockobits_qr_codes_table_created: "Fecha de creacion",
        view_rockobits_qr_codes_table_amount: "Monto de Rockobits",
        view_rockobits_qr_codes_table_expire: "Fecha de expiracion",
        view_rockobits_qr_codes_table_state: "Estado",
        view_rockobits_qr_codes_table_notfound: "No se encontraron codigos QR",
        view_rockobits_qr_codes_table_showqr: "Mostrar QR",
        view_rockobits_qr_code_state_active: "Activo",
        view_rockobits_qr_code_state_inactive: "Inactivo",
        view_rockobits_qr_code_state_consumed: "Consumido",
        view_rockobits_qr_code_state_expired: "Expirado",
        view_rockobits_qr_code_state_unknown: "Desconocido",
        view_subcompanies_create_title: "Crear Subempresa",
        view_subcompanies_create_limit_part_1: "Tienes un límite de",
        view_subcompanies_create_limit_part_2: "Cuentas",
        view_subcompanies_create_name: "Nombre",
        view_subcompanies_create_email: "Correo Electrónico",
        view_subcompanies_create_password: "Contraseña",
        view_subcompanies_create_address: "Dirección",
        view_subcompanies_create_phone: "Teléfono",
        view_subcompanies_create_postalCode: "Código Postal",
        view_subcompanies_list_title: "Subempresas",
        view_subcompanies_list_table_photo: "Foto",
        view_subcompanies_list_table_name: "Nombre",
        view_subcompanies_list_table_email: "Correo Electrónico",
        view_subcompanies_list_table_address: "Dirección",
        view_subcompanies_list_table_phone: "Teléfono",
        view_subcompanies_list_table_state: "Estado",
        view_subcompanies_list_table_actions: "Acciones",
        view_subcompanies_list_table_notfound: "No se encontraron subempresas",
        view_subcompanies_list_states_active: "Activo",
        view_subcompanies_list_states_inactive: "Inactivo",
        view_subcompanies_list_states_banned: "Baneado",
        view_subcompanies_list_editInfo: "Editar Información",
        view_subcompanies_list_change_paswword: "Cambiar Contraseña",
        view_subcompanies_list_change_photo: "Cambiar Foto",
        view_subcompanies_list_editInfo_name: "Nombre",
        view_subcompanies_list_editInfo_email: "Correo Electrónico",
        view_subcompanies_list_editInfo_address: "Dirección",
        view_subcompanies_list_editInfo_phone: "Teléfono",
        view_subcompanies_list_editInfo_save: "Guardar Cambios",
        view_subcompanies_list_editInfo_saving: "Guardando cambios..",
        view_subcompanies_list_editInfo_close: "Cerrar",
        view_subcompanies_list_change_paswword_password: "Nueva Contraseña",
        view_subcompanies_list_change_paswword_password_confirm:
          "Confirmar Contraseña",
        view_subcompanies_list_change_paswword_password_button: "Cambiar",
        view_subcompanies_list_change_paswword_password_button_changing:
          "Cambiando..",
        view_subcompanies_list_change_photo_title: "Cambiar foto de perfil",
        view_subcompanies_list_change_photo_upload: "Cambiar",
        view_subcompanies_list_change_photo_select: "Seleccionar foto",
        view_subcompanies_list_cancel: "Cancelar",
        view_logout: "Cerrar Sesión",
        view_transactions_pay: "Pago",
        view_transactions_pay_loading: "Cargando...",
        view_transactions_pay_no_transactions:
          "No se encontraron transacciones",
        view_transactions_table_date: "Fecha",
        view_transactions_table_type: "Tipo",
        view_transactions_table_amount: "Monto",
        view_transactions_table_user: "Usuario",
      },
    },
    pt: {
      translation: {
        psrockola_owner: "Proprietário",
        psrockola_employee: "Funcionário",
        psrockola_distributor: "Distribuidor",
        psrockola_subcompany: "Subempresa",
        psrockola_wallet: "Carteira",
        psrockola_appbar_expire: "Expirar",
        psrockola_appbar_role_company: "Empresa",
        psrockola_appbar_role_employee: "Funcionário",
        psrockola_appbar_role_distributor: "Distribuidor",
        psrockola_appbar_role_subcompany: "Subempresa",
        menu_dashboard: "Painel",
        menu_transactions: "Transações",
        menu_screens: "Telas",
        menu_currentplays: "Reproduções atuais",
        menu_membership: "Membros",
        menu_rockobits: "Rockobits",
        menu_employees: "Funcionários",
        menu_create: "Criar",
        menu_list: "Lista",
        menu_transfer: "Transferir",
        menu_memberships_get: "Obter",
        menu_memberships_cancel: "Cancelar",
        menu_buy: "Comprar",
        menu_sale: "Vendas",
        menu_qr: "QR",
        menu_help: "Ajuda",
        menu_subcompanies: "Subempresas",
        language_snackbar_message: "Idioma alterado com sucesso",
        language_snackbar_error: "Erro ao alterar o idioma",
        view_dashboard_welcome: "Bem-vindo, ",
        view_dashboard_top_10_transfers:
          "Top 10 Transferências Rockobits por Subempresa",
        view_dashboard_top_10_reproductions:
          "Top 10 Reproduções por Subempresa",
        view_dashboard_last_pay_transactions: "Últimas transações de pagamento",
        view_dashboard_no_transactions: "Nenhuma transação",
        view_dashboard_reproductions: "Reproduções",
        view_dashboard_table_date: "Data",
        view_dashboard_table_type: "Tipo",
        view_dashboard_table_amount: "Quantia",
        view_dashboard_table_distributor: "Distribuidor",
        view_dashboard_table_user: "Usuário",
        view_dashboard_sales: "Vendas",
        view_dashboard_count_sales: "Contagem de Vendas",
        view_dashboard_total_sales: "Total de Vendas",
        view_dashboard_sales_own: "Vendas Próprias",
        view_dashboard_screens_reproductions: "Reproduções de Telas",
        view_dashboard_employees_sales: "Vendas de Funcionários",
        view_dashboard_last_rockobits_transactions:
          "Últimas transações Rockobits",
        view_dashboard_type_distributor_buy: "Comprar",
        view_dashboard_type_distributor_buy_membership: "Comprar Membresia",
        view_dashboard_type_company_transfer_to_client:
          " Transferência de Rockobits para Cliente",
        view_dashboard_type_company_transfer_to_employee:
          "Transferência de Rockobits para Funcionário",
        view_dashboard_type_company_claim_qr: "Reivindicação de código QR",
        view_dashboard_type_company_revoke_all:
          "Revogação de Rockobits de Funcionário",
        view_dashboard_type_company_buy: "Compra de ",
        view_memberships: "Membros",
        view_memberships_card_get: "Obter",
        view_memberships_card_month: "mês",
        view_memberships_card_year: "ano",
        view_memberships_card_employees: "para funcionários",
        view_memberships_card_employees_account_singular: "conta",
        view_memberships_card_employees_account_plural: "contas",
        view_memberships_card_skins_singular: "skin disponível",
        view_memberships_card_skins_plural: "skins disponíveis",
        view_memberships_card_screens_start: "1 Tela (Máximo",
        view_memberships_card_screens_end: "Telas)",
        monthly_memberships: "Mensal",
        yearly_memberships: "Anual",
        view_employees_create_title: "Criar Funcionário",
        view_employees_create_limit: "Limite de Funcionários",
        view_employees_create_name: "Nome",
        view_employees_create_lastname: "Sobrenome",
        view_employees_create_email: "Email",
        view_employees_create_password: "Senha",
        view_employees_create_address: "Endereço",
        view_employees_create_phone: "Telefone",
        view_employees_create_photo: "Foto",
        view_employees_create_button: "Criar",
        view_employees_create_loading: "Criando funcionário..",
        view_employees_list_limit: "Limite",
        view_employees_list_employees: "Funcionários",
        view_employees_list_name: "Nome",
        view_employees_list_lastname: "Sobrenome",
        view_employees_list_email: "Email",
        view_employees_list_phone: "Telefone",
        view_employees_list_address: "Endereço",
        view_employees_list_wallet: "Carteira",
        view_employees_list_playlist: "Permissão de lista de reprodução",
        view_employees_list_actions: "Ações",
        view_employees_list_not_found: "Nenhum funcionário encontrado",
        view_employees_list_edit: "Editar",
        view_employees_list_delete: "Excluir",
        view_employees_list_claim: "Reivindicar RB",
        view_employees_list_transactions: "Transações",
        view_employees_list_edit_tab_edit: "Editar",
        view_employees_list_edit_tab_password: "Alterar senha",
        view_employees_list_edit_tab_photo: "Alterar foto",
        view_employees_list_edit_tab_edit_name: "Nome",
        view_employees_list_edit_tab_edit_lastname: "Sobrenome",
        view_employees_list_edit_tab_edit_email: "Email",
        view_employees_list_edit_tab_edit_address: "Endereço",
        view_employees_list_edit_tab_edit_phone: "Telefone",
        view_employees_list_edit_tab_edit_button: "Salvar",
        view_employees_list_edit_tab_password_password: "Senha",
        view_employees_list_edit_tab_password_confirm_password:
          "Confirmar Senha",
        view_employees_list_edit_tab_password_button: "Alterar",
        view_employees_list_edit_tab_photo_title: "Alterar foto",
        view_employees_list_edit_tab_photo_upload: "Carregar foto",
        view_employees_list_edit_tab_photo_button: "Alterar",
        view_employees_list_delete_title: "Confirmar exclusão",
        view_employees_list_delete_message:
          "Tem certeza de que deseja excluir este funcionário?",
        view_employees_list_delete_button_cancel: "Cancelar",
        view_employees_list_delete_button_delete: "Excluir",
        view_screens_count: "Telas",
        view_screens_limit: "Limite",
        view_screens_active: "Ativas",
        view_screens_add_button: "Adicionar tela",
        view_screens_edit: "Editar",
        view_screens_edit_name: "Editar Nome",
        view_screens_edit_name_name: "Nome da Tela",
        view_screens_edit_button_save: "Salvar Alterações",
        view_screens_edit_change_password: "Alterar Senha",
        view_screens_edit_password: "Senha",
        view_screens_edit_password_confirm: "Confirmar Senha",
        view_screens_create: "Criar Tela",
        view_screens_create_name: "Nome da Tela",
        view_screens_create_password: "Senha",
        view_screens_create_save: "Criar",
        view_rockobits_title: "Pacotes de Rockobits",
        view_rockobits_wallet: "Carteira",
        view_rockobits_card_price: "Preço",
        view_rockobtis_card_buy: "Comprar",
        view_rockobits_sale_title: "Vendas de Rockobits",
        view_rockobits_sale_email: "Email",
        view_rockobits_sale_quantity: "Quantidade de Rockobits",
        view_rockobits_sale_payment: "Método de Pagamento",
        view_rockobits_sale_cash: "Dinheiro",
        view_rockobits_sale_transfer: "Transferência",
        view_rockobits_sale_next: "Próximo",
        view_rockobits_sale_upload:
          "Carregar comprovante de transferência bancária",
        view_rockobits_modal_title: "Informações do cliente",
        view_rockobits_modal_name: "Nome",
        view_rockobits_modal_email: "Email",
        view_rockobits_modal_amount: "Valor da transação",
        view_rockobits_modal_button_sale: "Venda",
        view_rockobits_modal_button_cancel: "Cancelar",
        view_rockobits_qr_title: "Gerar código QR",
        view_rockobits_qr_amount: "Quantidade Rockobits",
        view_rockobits_qr_expire: "Data de expiração",
        view_rockobits_qr_1_minute: "1 minuto",
        view_rockobits_qr_1_hour: "1 hora",
        view_rockobits_qr_3_hour: "3 horas",
        view_rockobits_qr_1_day: "1 dia",
        view_rockobits_qr_button: "Gerar QR",
        view_rockobits_qr_codes: "Códigos QR",
        view_rockobits_qr_codes_active: "Ativo",
        view_rockobits_qr_codes_inactive: "Inativo",
        view_rockobits_qr_codes_consumed: "Consumido",
        view_rockobits_qr_codes_expired: "Expirado",
        view_rockobits_qr_codes_all: "Todos",
        view_rockobits_qr_codes_table_created: "Data de criação",
        view_rockobits_qr_codes_table_amount: "Quantidade de Rockobits",
        view_rockobits_qr_codes_table_expire: "Data de expiração",
        view_rockobits_qr_codes_table_state: "Estado",
        view_rockobits_qr_codes_table_notfound: "Nenhum código QR encontrado",
        view_rockobits_qr_codes_table_showqr: "Mostrar QR",
        view_rockobits_qr_code_state_active: "Ativo",
        view_rockobits_qr_code_state_inactive: "Inativo",
        view_rockobits_qr_code_state_consumed: "Consumido",
        view_rockobits_qr_code_state_expired: "Expirado",
        view_rockobis_qr_code_state_uknown: "Desconhecido",
        view_subcompanies_create_title: "Criar Subempresa",
        view_subcompanies_create_limit_part_1: "Você tem um limite de",
        view_subcompanies_create_limit_part_2: "Contas",
        view_subcompanies_create_name: "Nome",
        view_subcompanies_create_email: "Email",
        view_subcompanies_create_password: "Senha",
        view_subcompanies_create_address: "Endereço",
        view_subcompanies_create_phone: "Telefone",
        view_subcompanies_create_postalCode: "Código Postal",
        view_subcompanies_list_title: "Subempresas",
        view_subcompanies_list_table_photo: "Foto",
        view_subcompanies_list_table_name: "Nome",
        view_subcompanies_list_table_email: "Email",
        view_subcompanies_list_table_address: "Endereço",
        view_subcompanies_list_table_phone: "Telefone",
        view_subcompanies_list_table_state: "Estado",
        view_subcompanies_list_table_actions: "Ações",
        view_subcompanies_list_table_notfound: "Nenhuma subempresa encontrada",
        view_subcompanies_list_states_active: "Ativo",
        view_subcompanies_list_states_inactive: "Inativo",
        view_subcompanies_list_states_banned: "Banido",
        view_subcompanies_list_editInfo: "Editar Informações",
        view_subcompanies_list_change_paswword: "Alterar Senha",
        view_subcompanies_list_change_photo: "Alterar Foto",
        view_subcompanies_list_editInfo_name: "Nome",
        view_subcompanies_list_editInfo_email: "Email",
        view_subcompanies_list_editInfo_address: "Endereço",
        view_subcompanies_list_editInfo_phone: "Telefone",
        view_subcompanies_list_editInfo_save: "Salvar Alterações",
        view_subcompanies_list_editInfo_saving: "Salvando alterações..",
        view_subcompanies_list_editInfo_close: "Fechar",
        view_subcompanies_list_change_paswword_password: "Nova Senha",
        view_subcompanies_list_change_paswword_password_confirm:
          "Confirmar Senha",
        view_subcompanies_list_change_paswword_password_button: "Alterar",
        view_subcompanies_list_change_paswword_password_button_changing:
          "Alterando..",
        view_subcompanies_list_change_photo_title: "Alterar foto de perfil",
        view_subcompanies_list_change_photo_upload: "Alterar",
        view_subcompanies_list_change_photo_select: "Selecionar foto",
        view_subcompanies_list_cancel: "Cancelar",
        view_logout: "Sair",
        view_transactions_pay: "Pagar",
        view_transactions_pay_loading: "Carregando...",
        view_transactions_pay_no_transactions: "Nenhuma transação encontrada",
        view_transactions_table_date: "Data",
        view_transactions_table_type: "Tipo",
        view_transactions_table_amount: "Quantidade",
        view_transactions_table_user: "Usuário",
      },
    },
  },
  lng: storedLanguage,
  fallbackLng: ["en"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
