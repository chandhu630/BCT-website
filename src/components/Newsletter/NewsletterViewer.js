import React, { useState, useEffect } from 'react';
import './NewsletterViewer.css';
import { jsPDF } from 'jspdf';

const NewsletterViewer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageFlipSound, setPageFlipSound] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState(null);
  const [isSoundEnabled, setSoundEnabled] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const totalPages = 21;
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Initialize audio with error handling
    const audio = new Audio('/sounds/page-flip.mp3');
    audio.addEventListener('canplaythrough', () => {
      setPageFlipSound(audio);
    });
    audio.addEventListener('error', (e) => {
      console.warn('Error loading page flip sound:', e);
    });

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      audio.remove();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const playPageFlipSound = () => {
    if (pageFlipSound && isSoundEnabled) {
      try {
        // Reset the audio to start and play
        pageFlipSound.currentTime = 0;
        pageFlipSound.play().catch(err => {
          console.warn('Error playing sound:', err);
        });
      } catch (err) {
        console.warn('Error playing sound:', err);
      }
    }
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages - (totalPages % 2 === 0 ? 1 : 0));
  };

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum - (pageNum % 2 === 0 ? 1 : 0));
    }
  };

  const toggleSound = () => {
    setSoundEnabled(!isSoundEnabled);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = async () => {
    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      let pagePromises = [];

      // Load all images
      for (let i = 1; i <= totalPages; i++) {
        pagePromises.push(
          new Promise((resolve) => {
            const img = new Image();
            img.src = `/imgs/page${i}.png`;
            img.onload = () => resolve(img);
          })
        );
      }

      // Wait for all images to load
      const images = await Promise.all(pagePromises);

      // Add each image as a page to the PDF
      images.forEach((img, index) => {
        if (index > 0) pdf.addPage();
        
        // Calculate dimensions to fit page
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        
        const imgRatio = img.width / img.height;
        const pageRatio = pageWidth / pageHeight;
        
        let finalWidth = pageWidth;
        let finalHeight = pageWidth / imgRatio;
        
        if (finalHeight > pageHeight) {
          finalHeight = pageHeight;
          finalWidth = pageHeight * imgRatio;
        }
        
        const x = (pageWidth - finalWidth) / 2;
        const y = (pageHeight - finalHeight) / 2;

        pdf.addImage(img, 'PNG', x, y, finalWidth, finalHeight);
      });

      // Download the PDF
      pdf.save('newsletter.pdf');

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again later.');
    }
  };

  const toggleSinglePage = () => {
    // Implementation for single page view
    // You'll need to add state and modify the render logic
  };

  const goToPrevPage = () => {
    if (currentPage > 1 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('backward');
      playPageFlipSound();
      setTimeout(() => {
        setCurrentPage(currentPage - (isMobileView ? 1 : 2));
        setIsFlipping(false);
      }, 600);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('forward');
      playPageFlipSound();
      setTimeout(() => {
        setCurrentPage(currentPage + (isMobileView ? 1 : 2));
        setIsFlipping(false);
      }, 600);
    }
  };

  return (
    <div className="newsletter-container">
      <h2 className="newsletter-title">Newsletter</h2>
      <div className="controls-bar">
        <div className="left-controls">
          <button onClick={toggleSinglePage} className="control-button">
            <i className="fas fa-file"></i>
            <span>Single page</span>
          </button>
          <button onClick={toggleSound} className="control-button">
            <i className={`fas fa-volume-${isSoundEnabled ? 'up' : 'mute'}`}></i>
            <span>Sounds</span>
          </button>
          <button onClick={handlePrint} className="control-button">
            <i className="fas fa-print"></i>
            <span>Print</span>
          </button>
          <button onClick={handleDownload} className="control-button">
            <i className="fas fa-download"></i>
            <span>Download</span>
          </button>
        </div>
        <div className="center-controls">
          <button onClick={goToFirstPage} className="control-button">
            <i className="fas fa-step-backward"></i>
          </button>
          <input 
            type="number" 
            value={currentPage}
            onChange={(e) => goToPage(parseInt(e.target.value))}
            min="1"
            max={totalPages}
          />
          <span>of {totalPages}</span>
          <button onClick={goToLastPage} className="control-button">
            <i className="fas fa-step-forward"></i>
          </button>
        </div>
        <div className="right-controls">
          <button onClick={toggleFullscreen} className="control-button">
            <i className={`fas fa-${isFullscreen ? 'compress' : 'expand'}`}></i>
          </button>
        </div>
      </div>
      <div className="booklet-viewer">
        <button 
          className="nav-button prev" 
          onClick={goToPrevPage}
          disabled={currentPage <= 1 || isFlipping}
        >
          ❮
        </button>
        
        <div className={`page-spread ${isMobileView ? 'mobile-view' : ''}`}>
          {!isMobileView && (
            <div className="page left">
              <img 
                src={`/imgs/page${currentPage}.png`} 
                alt={`Page ${currentPage}`}
                className="page-image"
              />
            </div>
          )}
          <div className={`page ${isMobileView ? 'single' : 'right'} ${
            isFlipping ? (flipDirection === 'forward' ? 'flip-forward' : 'flip-backward') : ''
          }`}>
            <div className="page-front">
              <img 
                src={`/imgs/page${isMobileView ? currentPage : currentPage + 1}.png`} 
                alt={`Page ${isMobileView ? currentPage : currentPage + 1}`}
                className="page-image"
              />
            </div>
            <div className="page-back">
              <img 
                src={`/imgs/page${currentPage - 1}.png`} 
                alt={`Page ${currentPage - 1}`}
                className="page-image"
              />
            </div>
          </div>
        </div>

        <button 
          className="nav-button next" 
          onClick={goToNextPage}
          disabled={currentPage >= totalPages || isFlipping}
        >
          ❯
        </button>
      </div>
      <p className="page-info">
        Page {currentPage}{!isMobileView && currentPage < totalPages ? `-${currentPage + 1}` : ''} of {totalPages}
      </p>
    </div>
  );
};

export default NewsletterViewer;
