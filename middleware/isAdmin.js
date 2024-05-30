export default function(context) {
    if (context.$auth.$state.user !== null) {
        if (context.$auth.$state.user.role_view !== 'admin') {
            // Redirect to admin page
            context.redirect(`/`);
        } 
    }
    else {
        console.log('user empty')
    }
}