function horizontal() {
    document.addEventListener('mousewheel', function (e) {
        const container = document.querySelector('.container');
        container.scrollLeft += e.deltaY;
    })
    // document.addEventListener('mousewheel', function (e) {
    //     const container = document.querySelector('.container');
    //     const currentLeft = container.scrollLeft;
    //     console.log(currentLeft, container.offsetWidth);
    //     console.log(currentLeft % (container.offsetWidth - 2));
    //     if (currentLeft % (container.offsetWidth) < 1 || container.offsetWidth - currentLeft < 5) {
    //         if (e.deltaY > 0) {
    //             container.scrollTo({
    //                 left: currentLeft + container.offsetWidth,
    //                 behavior: 'smooth'
    //             });
    //         } else {
    //             container.scrollTo({
    //                 left: currentLeft - container.offsetWidth,
    //                 behavior: 'smooth'
    //             });
    //         }
    //     }
    // })
}

horizontal();