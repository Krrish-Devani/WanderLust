let filters = document.querySelectorAll('.filter');
        for (filter of filters) {
            filter.addEventListener("click", function() {
                const category = this.dataset.category;
                window.location.href = `/listings?category=${category}`;
            })
        }