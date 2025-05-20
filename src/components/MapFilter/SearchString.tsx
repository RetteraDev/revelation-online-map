import React, { useState, useRef, useEffect } from 'react';
import './SearchString.css';

import { ISearchResult, searchAll } from '../../utils/resourceFilter';


const RESULTS_PER_PAGE = 5;

const SearchString: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<ISearchResult[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Обработка поиска с дебаунсом
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setCurrentPage(0);
      return;
    }

    const timer = setTimeout(() => {
      const results = searchAll(searchQuery);
      setSearchResults(results);
      setCurrentPage(0);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Закрытие результатов при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleResultSelect = (result: ISearchResult) => {
    const params = new URLSearchParams();
    params.set(result.type, result.id);
    window.history.pushState({}, '', `?${params.toString()}`);
    
    setSearchQuery(result.name);
    setIsFocused(false);
  };

  const handleClearInput = () => {
    setSearchQuery('');
    setSearchResults([]);
    inputRef.current?.focus();
    window.history.pushState({}, '', window.location.pathname);
  };

  const handleNextPage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPage(prev => prev - 1);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const totalPages = Math.ceil(searchResults.length / RESULTS_PER_PAGE);
  const startIndex = currentPage * RESULTS_PER_PAGE;
  const endIndex = startIndex + RESULTS_PER_PAGE;
  const currentResults = searchResults.slice(startIndex, endIndex);

  const showInitialHelp = isFocused && !searchQuery;
  const showNoResults = isFocused && searchQuery && searchResults.length === 0;
  const showResults = isFocused && searchResults.length > 0;

  return (
    <div 
      className="search-container"
      ref={searchRef}
    >
      <div className="search-input-wrapper">
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={handleFocus}
          placeholder="Поиск ресурсов..."
          className="search-input"
        />
        {searchQuery && (
          <button 
            className="clear-button"
            onClick={handleClearInput}
            aria-label="Очистить поиск"
          >
            ×
          </button>
        )}
      </div>

      {showInitialHelp && (
        <div className="search-dropdown">
          <div className="help-message">
            Здесь вы можете поискать по названию категорию, ресурс, конкретный предмет или торговца
          </div>
        </div>
      )}

      {showNoResults && (
        <div className="search-dropdown">
          <div className="no-results-message">
            Ничего не найдено
          </div>
        </div>
      )}

      {showResults && (
        <div className="search-dropdown">
          <div className="search-results-list">
            {currentResults.map((result) => (
              <div
                key={`${result.type}-${result.id}`}
                className="search-result-item"
                onClick={() => handleResultSelect(result)}
              >
                <span className="result-name">{result.name}</span>
                <span className={`result-type ${result.type}`}>
                  {result.type}
                </span>
              </div>
            ))}
          </div>
          
          {totalPages > 1 && (
            <div className="pagination-controls">
              <button
                className={`pagination-button ${currentPage === 0 ? 'disabled' : ''}`}
                onClick={handlePrevPage}
                disabled={currentPage === 0}
              >
                <svg width="12" height="12" viewBox="0 0 24 24">
                  <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
                </svg>
              </button>
              <span className="page-indicator">
                {currentPage + 1} / {totalPages}
              </span>
              <button
                className={`pagination-button ${currentPage === totalPages - 1 ? 'disabled' : ''}`}
                onClick={handleNextPage}
                disabled={currentPage === totalPages - 1}
              >
                <svg width="12" height="12" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchString;
