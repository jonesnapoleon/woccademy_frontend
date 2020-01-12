const initState = {
    courses: [
        {title: 'Title 1', price: 300, author: 'Jones', short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum', 
            category: 'Arsitektur', rating: 4.5, enroller: 350, pics: 'https://i.ytimg.com/vi/pYreC7U1F8o/maxresdefault.jpg'},
        {title: 'Title 2', price: 330, author: 'Joses', short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
            category: 'Design & Branding', rating: 5, enroller: 350, pics: 'https://www.billboard.com/files/styles/article_main_image/public/media/irene-bae-joo-hyun-red-velvet-2019-billboard-1548.jpg'},
        {title: 'Title 3', price: 550, author: 'Oses', short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
            category: 'Design & Branding', rating: 4.32, enroller: 350, pics: 'http://kabardunia.com/wp-content/uploads2/2016/10/fx-krystal-2.jpg'},
        {title: 'Title 4', price: 2320, author: 'Osas', short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum', 
            category: 'Web & SEO', rating: 5, enroller: 350, pics: 'https://i.pinimg.com/originals/a1/6f/78/a16f78b32457af8400972f19c9d0191a.jpg'},
        {title: 'Title 5', price: 2320, author: 'Osas', short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
            category: 'Programming', rating: 5.43, enroller: 350, pics: 'https://cdn2.tstatic.net/kupang/foto/bank/images/yoona-snsd-yoona-snsd.jpg'},
        {title: 'Title 1', price: 300, author: 'Jones', short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum', 
            category: 'Arsitektur', rating: 4.5, enroller: 350, pics: 'https://i.ytimg.com/vi/pYreC7U1F8o/maxresdefault.jpg'},
        {title: 'Title 2', price: 330, author: 'Joses', short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
            category: 'Design & Branding', rating: 5, enroller: 350, pics: 'https://www.billboard.com/files/styles/article_main_image/public/media/irene-bae-joo-hyun-red-velvet-2019-billboard-1548.jpg'},
        {title: 'Title 3', price: 550, author: 'Oses', short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
            category: 'Design & Branding', rating: 4.32, enroller: 350, pics: 'http://kabardunia.com/wp-content/uploads2/2016/10/fx-krystal-2.jpg'},
        {title: 'Title 4', price: 2320, author: 'Osas', short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum', 
            category: 'Web & SEO', rating: 5, enroller: 350, pics: 'https://i.pinimg.com/originals/a1/6f/78/a16f78b32457af8400972f19c9d0191a.jpg'},
        {title: 'Title 5', price: 2320, author: 'Osas', short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
            category: 'Programming', rating: 5.43, enroller: 350, pics: 'https://cdn2.tstatic.net/kupang/foto/bank/images/yoona-snsd-yoona-snsd.jpg'},
        {title: 'Title 2', price: 330, author: 'Joses', short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
            category: 'Design & Branding', rating: 5, enroller: 350, pics: 'https://www.billboard.com/files/styles/article_main_image/public/media/irene-bae-joo-hyun-red-velvet-2019-billboard-1548.jpg'},
        {title: 'Title 3', price: 550, author: 'Oses', short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
            category: 'Design & Branding', rating: 4.32, enroller: 350, pics: 'http://kabardunia.com/wp-content/uploads2/2016/10/fx-krystal-2.jpg'},
        
    ],
    coursesCategories: ['Arsitektur', 'Design & Branding', 'Digital Marketing', 'Programming', 'Web & SEO', 'Self-improvement'],
    isLoggedIn: false
}

const rootReducer = (state = initState, action) => {
    return state
}

export default rootReducer