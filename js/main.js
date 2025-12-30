document.addEventListener("DOMContentLoaded", function () {
    const burgerButton = document.querySelector('[data-js-header-burger-button]');
    const menu = document.querySelector('[data-js-header-overlay]');
    const header = document.querySelector('.header');

    if (burgerButton && menu && header) {
      burgerButton.addEventListener('click', function () {
        header.classList.toggle('open-menu');  // Анимация бургера
        menu.classList.toggle('is-open');      // Показывает меню на мобилке
		document.body.classList.toggle('scroll-lock');
      });
    }
});

const sliderCategories = new Swiper('.slider-categories', {
	direction: 'horizontal',
	loop: false,
	scrollbar: {
		el: '.swiper-scrollbar-categories',
		draggable: true,
	},
	navigation: {
	nextEl: '.slider-categories__arrow--right',
	prevEl: '.slider-categories__arrow--left',
	},

	pagination: {
		el: '.slider-pagination-categories',
	},

	breakpoints: {
	
	320: {
		slidesPerView: 2,
		spaceBetween: 15
	},
	
	768: {
		slidesPerView: 4,
		spaceBetween: 20
	},
	
	1024: {
		slidesPerView: 5,
		spaceBetween: 24
	}
	},

});

const sliderGenresMovies = new Swiper('.slider-genres-movies', {
	direction: 'horizontal',
	loop: false,
	scrollbar: {
		el: '.swiper-scrollbar-genres-movies',
		draggable: true,
	},
	navigation: {
	nextEl: '.slider-genres-movies__arrow--right',
	prevEl: '.slider-genres-movies__arrow--left',
	},

	pagination: {
		el: '.slider-pagination-genres-movies',
	},

	breakpoints: {
	
	320: {
		slidesPerView: 1.5,
		spaceBetween: 15
	},

	500: {
		slidesPerView: 3,
		spaceBetween: 15
	},
	
	768: {
		slidesPerView: 4,
		spaceBetween: 20
	},
	
	1024: {
		slidesPerView: 5,
		spaceBetween: 24
	}
	},

});
const sliderTop10Movies = new Swiper('.slider-top10-movies', {
	direction: 'horizontal',
	loop: false,
	scrollbar: {
		el: '.swiper-scrollbar-top10-movies',
		draggable: true,
	},
	navigation: {
	nextEl: '.slider-top10-movies__arrow--right',
	prevEl: '.slider-top10-movies__arrow--left',
	},

	pagination: {
		el: '.slider-pagination-top10-movies',
	},

	breakpoints: {
	
	320: {
		slidesPerView: 1.5,
		spaceBetween: 15
	},
	
	768: {
		slidesPerView: 3,
		spaceBetween: 20
	},
	
	1024: {
		slidesPerView: 4,
		spaceBetween: 24
	}
	},

});
const sliderTrendMovies = new Swiper('.slider-trend-movies', {
	direction: 'horizontal',
	loop: false,
	scrollbar: {
		el: '.swiper-scrollbar-trend-movies',
		draggable: true,
	},
	navigation: {
	nextEl: '.slider-trend-movies__arrow--right',
	prevEl: '.slider-trend-movies__arrow--left',
	},

	pagination: {
		el: '.slider-pagination-trend-movies',
	},

	breakpoints: {
	
	320: {
		slidesPerView: 1.2,
		spaceBetween: 15
	},

	900: {
		slidesPerView: 3,
		spaceBetween: 15
	},
	
	1024: {
		slidesPerView: 4,
		spaceBetween: 20
	},
	
	1230: {
		slidesPerView: 5,
		spaceBetween: 24
	}
	},

});
const sliderReleasesMovies = new Swiper('.slider-releases-movies', {
	direction: 'horizontal',
	loop: false,
	scrollbar: {
		el: '.swiper-scrollbar-release-movies',
		draggable: true,
	},
	navigation: {
	nextEl: '.slider-releases-movies__arrow--right',
	prevEl: '.slider-releases-movies__arrow--left',
	},

	pagination: {
		el: '.slider-pagination-releases-movies',
	},

	breakpoints: {
	
	320: {
		slidesPerView: 1.2,
		spaceBetween: 15
	},

	900: {
		slidesPerView: 3,
		spaceBetween: 15
	},
	
	1024: {
		slidesPerView: 4,
		spaceBetween: 20
	},
	
	1230: {
		slidesPerView: 5,
		spaceBetween: 24
	}
	},

});
const sliderMustMovies = new Swiper('.slider-must-movies', {
	direction: 'horizontal',
	loop: false,
	scrollbar: {
		el: '.swiper-scrollbar-must-movies',
		draggable: true,
	},
	navigation: {
	nextEl: '.slider-must-movies__arrow--right',
	prevEl: '.slider-must-movies__arrow--left',
	},

	pagination: {
		el: '.slider-pagination-must-movies',
	},

	breakpoints: {
	
	320: {
		slidesPerView: 1.2,
		spaceBetween: 15
	},

	900: {
		slidesPerView: 2,
		spaceBetween: 15
	},
	
	1024: {
		slidesPerView: 3,
		spaceBetween: 20
	},
	
	1300: {
		slidesPerView: 4,
		spaceBetween: 24
	}
	},

});

const sliderGenresShows = new Swiper('.slider-genres-shows', {
	direction: 'horizontal',
	loop: false,
	scrollbar: {
		el: '.swiper-scrollbar-genres-shows',
		draggable: true,
	},
	navigation: {
	nextEl: '.slider-genres-shows__arrow--right',
	prevEl: '.slider-genres-shows__arrow--left',
	},

	pagination: {
		el: '.slider-pagination-genres-shows',
	},

	breakpoints: {
	
	320: {
		slidesPerView: 1.5,
		spaceBetween: 15
	},

	500: {
		slidesPerView: 2.5,
		spaceBetween: 15
	},
	
	768: {
		slidesPerView: 4,
		spaceBetween: 20
	},
	
	1024: {
		slidesPerView: 5,
		spaceBetween: 24
	}
	},

});
const sliderTop10Shows = new Swiper('.slider-top10-shows', {
	direction: 'horizontal',
	loop: false,
	scrollbar: {
		el: '.swiper-scrollbar-top10-shows',
		draggable: true,
	},
	navigation: {
	nextEl: '.slider-top10-shows__arrow--right',
	prevEl: '.slider-top10-shows__arrow--left',
	},

	pagination: {
		el: '.slider-pagination-top10-shows',
	},

	breakpoints: {
	
	320: {
		slidesPerView: 1.5,
		spaceBetween: 15
	},

	500: {
		slidesPerView: 2.5,
		spaceBetween: 15
	},
	
	768: {
		slidesPerView: 3,
		spaceBetween: 20
	},
	
	1024: {
		slidesPerView: 4,
		spaceBetween: 24
	}
	},

});
const sliderTrendShows = new Swiper('.slider-trend-shows', {
	direction: 'horizontal',
	loop: false,
	scrollbar: {
		el: '.swiper-scrollbar-trend-shows',
		draggable: true,
	},
	navigation: {
	nextEl: '.slider-trend-shows__arrow--right',
	prevEl: '.slider-trend-shows__arrow--left',
	},

	pagination: {
		el: '.slider-pagination-trend-shows',
	},

	breakpoints: {
	
	320: {
		slidesPerView: 1.5,
		spaceBetween: 15
	},

	520: {
		slidesPerView: 2,
		spaceBetween: 15
	},
	
	900: {
		slidesPerView: 3,
		spaceBetween: 20
	},
	
	1150: {
		slidesPerView: 4,
		spaceBetween: 24
	}
	},

});
const sliderReleasesShows = new Swiper('.slider-releases-shows', {
	direction: 'horizontal',
	loop: false,
	scrollbar: {
		el: '.swiper-scrollbar-release-shows',
		draggable: true,
	},
	navigation: {
	nextEl: '.slider-releases-shows__arrow--right',
	prevEl: '.slider-releases-shows__arrow--left',
	},

	pagination: {
		el: '.slider-pagination-releases-shows',
	},

	breakpoints: {
	
	390: {
		slidesPerView: 1.5,
		spaceBetween: 15
	},
	520: {
		slidesPerView: 2,
		spaceBetween: 15
	},
	900: {
		slidesPerView: 2.5,
		spaceBetween: 15
	},
	
	1024: {
		slidesPerView: 3,
		spaceBetween: 20
	},
	
	1150: {
		slidesPerView: 4,
		spaceBetween: 24
	}
	},

});
const sliderMustShows = new Swiper('.slider-must-shows', {
	direction: 'horizontal',
	loop: false,
	scrollbar: {
		el: '.swiper-scrollbar-must-shows',
		draggable: true,
	},
	navigation: {
	nextEl: '.slider-must-shows__arrow--right',
	prevEl: '.slider-must-shows__arrow--left',
	},

	pagination: {
		el: '.slider-pagination-must-shows',
	},

	breakpoints: {
	
	390: {
		slidesPerView: 1.2,
		spaceBetween: 15
	},
	500: {
		slidesPerView: 1.5,
		spaceBetween: 15
	},
	768: {
		slidesPerView: 2,
		spaceBetween: 15
	},
	900: {
		slidesPerView: 2.5,
		spaceBetween: 15
	},
	
	1024: {
		slidesPerView: 3,
		spaceBetween: 20
	},
	
	1300: {
		slidesPerView: 4,
		spaceBetween: 24
	}
	},

});
const sliderPreview = new Swiper('.slider-preview', {
	direction: 'horizontal',
	loop: false,
	slidesPerView: 1,
	navigation: {
	nextEl: '.slider-preview__arrow--right',
	prevEl: '.slider-preview__arrow--left',
	},
	pagination: {
		el: '.slider-pagination-preview',
	}
});

const sliderCast = new Swiper('.slider-cast', {
	direction: 'horizontal',
	loop: false,
	scrollbar: {
		el: '.swiper-scrollbar-cast',
		draggable: true,
	},
	navigation: {
	nextEl: '.slider-cast__arrow-round--right',
	prevEl: '.slider-cast__arrow-round--left',
	},

	breakpoints: {
	
	390: {
		slidesPerView: 4,
		spaceBetween: 15
	},

	768: {
		slidesPerView: 5,
		spaceBetween: 20
	},
	
	1024: {
		slidesPerView: 8,
		spaceBetween: 20
	}
	},

});

const sliderReviews = new Swiper('.slider-reviews', {
	direction: 'horizontal',
	loop: false,
	navigation: {
	nextEl: '.slider-reviews__arrow-round--right',
	prevEl: '.slider-reviews__arrow-round--left',
	},

	pagination: {
		el: '.slider-pagination-reviews',
	},

	breakpoints: {
	
	390: {
		slidesPerView: 1,
		spaceBetween: 16
	},
	
	750: {
		slidesPerView: 2,
		spaceBetween: 20
	}
	},
});

function truncateFirstSentence() {
    const p = document.getElementById("hero-text");
	if (!p) return;
    const fullText = p.dataset.fullText || p.textContent;
    if (window.innerWidth <= 768) {
		const firstSentence = fullText.match(/.*?[.!?](\s|$)/);
		if (firstSentence) {
			p.textContent = firstSentence[0];
		}
    } else {
      p.textContent = fullText;
    }
    // Сохраняем полный текст в атрибут, если ещё не сохранён
    if (!p.dataset.fullText) {
      p.dataset.fullText = fullText;
    }
}

// Запустить при загрузке и при изменении размера окна
window.addEventListener("DOMContentLoaded", truncateFirstSentence);
window.addEventListener("resize", truncateFirstSentence);

import TabsCollection from './Tabs.js'
import ExpandableContentCollection from './ExpandableContent.js'
import SelectCollection from './Select.js'

new TabsCollection()
new ExpandableContentCollection()
new SelectCollection()