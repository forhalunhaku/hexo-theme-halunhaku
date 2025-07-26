// Enhanced code block copy functionality
(function () {
  'use strict';

  function initCopyButtons() {
    // Remove existing copy buttons to prevent duplicates
    document.querySelectorAll('.copy-btn, .copy-button').forEach(btn => {
      btn.remove();
    });

    // Process all code blocks
    const codeBlocks = document.querySelectorAll('pre');

    codeBlocks.forEach(function (codeBlock) {
      // Skip if already processed
      if (codeBlock.querySelector('.copy-btn') || codeBlock.hasAttribute('data-copy-processed')) {
        return;
      }

      // Mark as processed
      codeBlock.setAttribute('data-copy-processed', 'true');

      // Create copy button with improved styling
      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-btn';
      copyBtn.innerHTML = 'Copy';
      copyBtn.title = 'Copy code';
      copyBtn.setAttribute('aria-label', 'Copy code to clipboard');

      // Enhanced click handler
      copyBtn.addEventListener('click', async function (e) {
        e.preventDefault();
        e.stopPropagation();

        const code = codeBlock.querySelector('code');
        const text = code ? code.textContent.trim() : codeBlock.textContent.trim();

        try {
          await copyToClipboard(text);
          showCopySuccess(copyBtn);
        } catch (err) {
          console.error('Copy failed:', err);
          showCopyError(copyBtn);
        }
      });

      // Add to code block
      codeBlock.appendChild(copyBtn);
    });
  }

  async function copyToClipboard(text) {
    // Try modern clipboard API first
    if (navigator.clipboard && window.isSecureContext) {
      return await navigator.clipboard.writeText(text);
    }

    // Fallback for older browsers or non-secure contexts
    return new Promise((resolve, reject) => {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.cssText = 'position:fixed;top:-999px;left:-999px;opacity:0;pointer-events:none;';

      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();

      try {
        const successful = document.execCommand('copy');
        document.body.removeChild(textarea);

        if (successful) {
          resolve();
        } else {
          reject(new Error('Copy command failed'));
        }
      } catch (err) {
        document.body.removeChild(textarea);
        reject(err);
      }
    });
  }

  function showCopySuccess(btn) {
    const originalContent = btn.innerHTML;
    btn.innerHTML = '✓ Copied';
    btn.style.background = '#10b981';
    btn.style.color = 'white';
    btn.style.borderColor = '#10b981';
    btn.style.transform = 'scale(0.95)';

    setTimeout(() => {
      btn.innerHTML = originalContent;
      btn.style.background = '';
      btn.style.color = '';
      btn.style.borderColor = '';
      btn.style.transform = '';
    }, 2000);
  }

  function showCopyError(btn) {
    const originalContent = btn.innerHTML;
    btn.innerHTML = '✗ Failed';
    btn.style.background = '#ef4444';
    btn.style.color = 'white';
    btn.style.borderColor = '#ef4444';

    setTimeout(() => {
      btn.innerHTML = originalContent;
      btn.style.background = '';
      btn.style.color = '';
      btn.style.borderColor = '';
    }, 2000);
  }

  // Debounced initialization to prevent excessive calls
  let initTimeout;
  function debouncedInit() {
    clearTimeout(initTimeout);
    initTimeout = setTimeout(initCopyButtons, 100);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', debouncedInit);
  } else {
    debouncedInit();
  }

  // Handle dynamic content changes with improved performance
  let lastUrl = location.href;
  const observer = new MutationObserver((mutations) => {
    let shouldReinit = false;

    // Check if URL changed (SPA navigation)
    const currentUrl = location.href;
    if (currentUrl !== lastUrl) {
      lastUrl = currentUrl;
      shouldReinit = true;
    }

    // Check if new code blocks were added
    if (!shouldReinit) {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          for (const node of mutation.addedNodes) {
            if (node.nodeType === Node.ELEMENT_NODE) {
              if (node.tagName === 'PRE' || node.querySelector('pre')) {
                shouldReinit = true;
                break;
              }
            }
          }
          if (shouldReinit) break;
        }
      }
    }

    if (shouldReinit) {
      debouncedInit();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    observer.disconnect();
    clearTimeout(initTimeout);
  });

})();