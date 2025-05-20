import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './SearchString.css';

import { ISearchResult, searchAll } from '../../utils/resourceFilter';

const RESULTS_PER_PAGE = 5;

const SearchString: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<ISearchResult[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);

    // Refs для клика вне компонента
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

  // Обработка клика вне компонента для закрытия результатов
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Обновление URL при выборе результата
  const handleResultSelect = (result: ISearchResult) => {
    // Обновляем параметры поиска в URL
    setSearchParams({ [result.type]: result.id });
    // Обновляем локальный стейт поиска
    setSearchQuery(result.name);
    setIsFocused(false);
  };

  // Очистка поиска и URL
  const handleClearInput = () => {
    setSearchQuery('');
    setSearchResults([]);
    inputRef.current?.focus();
    setSearchParams({});
  };

  // Обработка ввода
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Пагинация
  const totalPages = Math.ceil(searchResults.length / RESULTS_PER_PAGE);
  const startIndex = currentPage * RESULTS_PER_PAGE;
  const endIndex = startIndex + RESULTS_PER_PAGE;
  const currentResults = searchResults.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages -1) {
      setCurrentPage(prev => prev +1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev -1);
    }
  };

  // Отображение подсказок и результатов
  const showInitialHelp = isFocused && !searchQuery;
	const showNoResults = isFocused && searchQuery && searchResults.length === 0;
	const showResults = isFocused && searchResults.length > 0;

  return (
		<div className="search-container" ref={searchRef}>
      <div className="search-input-wrapper">
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
					onFocus={() => setIsFocused(true)}
          placeholder="Поиск ресурсов..."
          className="search-input"
        />
        {searchQuery && (
            <button className="clear-button" onClick={handleClearInput} aria-label="Очистить поиск">
            ×
          </button>
        )}
      </div>

      {/* Помощь при пустом вводе */}
      {showInitialHelp && (
        <div className="search-dropdown">
          <div className="help-message">
            Здесь вы можете поискать по названию категорию, ресурс, конкретный предмет или торговца
          </div>
        </div>
      )}

      {/* Нет результатов */}
      {showNoResults && (
        <div className="search-dropdown">
            <div className="no-results-message">Ничего не найдено</div>
        </div>
      )}

      {/* Результаты поиска */}
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
					 <span className={`result-type ${result.type}`}>{result.type}</span>
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
