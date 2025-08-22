// Inventory Management App
class InventoryApp {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'ar';
        this.inventory = JSON.parse(localStorage.getItem('inventory')) || [];
        this.sales = JSON.parse(localStorage.getItem('sales')) || [];
        this.currentEditId = null;
        this.currentSale = {
            items: [],
            customer: { name: '', phone: '' },
            invoiceNumber: this.generateInvoiceNumber(),
            date: new Date().toISOString()
        };
        this.taxRate = 0.10; // 10% tax
        
        this.translations = {
            ar: {
                'إدارة المخزون': 'إدارة المخزون',
                'المخزون': 'المخزون',
                'إضافة منتج': 'إضافة منتج',
                'التقارير': 'التقارير',
                'الإعدادات': 'الإعدادات',
                'البحث في المنتجات...': 'البحث في المنتجات...',
                'إجمالي المنتجات': 'إجمالي المنتجات',
                'القيمة الإجمالية': 'القيمة الإجمالية',
                'إضافة منتج جديد': 'إضافة منتج جديد',
                'اسم المنتج': 'اسم المنتج',
                'الفئة': 'الفئة',
                'الكمية': 'الكمية',
                'السعر': 'السعر',
                'الوصف': 'الوصف',
                'اختر الفئة': 'اختر الفئة',
                'إلكترونيات': 'إلكترونيات',
                'ملابس': 'ملابس',
                'طعام': 'طعام',
                'كتب': 'كتب',
                'أخرى': 'أخرى',
                'تعديل المنتج': 'تعديل المنتج',
                'حفظ التغييرات': 'حفظ التغييرات',
                'إلغاء': 'إلغاء',
                'التقارير والإحصائيات': 'التقارير والإحصائيات',
                'المنتجات حسب الفئة': 'المنتجات حسب الفئة',
                'المنتجات منخفضة المخزون': 'المنتجات منخفضة المخزون',
                'البيانات': 'البيانات',
                'تصدير البيانات': 'تصدير البيانات',
                'مسح جميع البيانات': 'مسح جميع البيانات',
                'المبيعات': 'المبيعات',
                'نقطة البيع': 'نقطة البيع',
                'فاتورة جديدة': 'فاتورة جديدة',
                'فاتورة رقم': 'فاتورة رقم',
                'معلومات العميل': 'معلومات العميل',
                'اسم العميل': 'اسم العميل',
                'رقم الهاتف': 'رقم الهاتف',
                'إضافة منتجات': 'إضافة منتجات',
                'اختر منتج': 'اختر منتج',
                'المجموع الفرعي:': 'المجموع الفرعي:',
                'الضريبة (10%):': 'الضريبة (10%):',
                'الإجمالي:': 'الإجمالي:',
                'حفظ مسودة': 'حفظ مسودة',
                'إتمام البيع': 'إتمام البيع',
                'تاريخ المبيعات': 'تاريخ المبيعات',
                'جميع المبيعات': 'جميع المبيعات',
                'اليوم': 'اليوم',
                'هذا الأسبوع': 'هذا الأسبوع',
                'هذا الشهر': 'هذا الشهر',
                'فاتورة': 'فاتورة',
                'طباعة': 'طباعة',
                'العودة للمستودع': 'العودة للمستودع',
                'العودة إلى المستودع': 'العودة إلى المستودع',
                'إنهاء الجولة التجارية وإعداد تقرير شامل': 'إنهاء الجولة التجارية وإعداد تقرير شامل',
                'ملخص الجولة الحالية': 'ملخص الجولة الحالية',
                'إجمالي المبيعات': 'إجمالي المبيعات',
                'إجمالي الإيرادات': 'إجمالي الإيرادات',
                'المنتجات المتبقية': 'المنتجات المتبقية',
                'نسبة المبيعات': 'نسبة المبيعات',
                'تحذير مهم': 'تحذير مهم',
                'العودة إلى المستودع ستؤدي إلى إنشاء تقرير نهائي وإفراغ المخزون بالكامل. هذا الإجراء لا يمكن التراجع عنه.': 'العودة إلى المستودع ستؤدي إلى إنشاء تقرير نهائي وإفراغ المخزون بالكامل. هذا الإجراء لا يمكن التراجع عنه.',
                'خطوات العودة إلى المستودع': 'خطوات العودة إلى المستودع',
                'إنشاء التقرير الشامل': 'إنشاء التقرير الشامل',
                'طباعة وتصدير التقرير': 'طباعة وتصدير التقرير',
                'إفراغ المخزون': 'إفراغ المخزون',
                'الاستعداد للجولة الجديدة': 'الاستعداد للجولة الجديدة',
                'أؤكد أنني أريد العودة إلى المستودع وإنهاء الجولة الحالية': 'أؤكد أنني أريد العودة إلى المستودع وإنهاء الجولة الحالية',
                'إنشاء التقرير والعودة': 'إنشاء التقرير والعودة',
                'التقرير النهائي للجولة': 'التقرير النهائي للجولة',
                'تصدير': 'تصدير',
                'تأكيد إفراغ المخزون': 'تأكيد إفراغ المخزون',
                'FR': 'FR',
                'AR': 'AR'
            },
            fr: {
                'إدارة المخزون': 'Gestion d\'Inventaire',
                'المخزون': 'Inventaire',
                'إضافة منتج': 'Ajouter Produit',
                'التقارير': 'Rapports',
                'الإعدادات': 'Paramètres',
                'البحث في المنتجات...': 'Rechercher des produits...',
                'إجمالي المنتجات': 'Total Produits',
                'القيمة الإجمالية': 'Valeur Totale',
                'إضافة منتج جديد': 'Ajouter Nouveau Produit',
                'اسم المنتج': 'Nom du Produit',
                'الفئة': 'Catégorie',
                'الكمية': 'Quantité',
                'السعر': 'Prix',
                'الوصف': 'Description',
                'اختر الفئة': 'Choisir Catégorie',
                'إلكترونيات': 'Électronique',
                'ملابس': 'Vêtements',
                'طعام': 'Nourriture',
                'كتب': 'Livres',
                'أخرى': 'Autre',
                'تعديل المنتج': 'Modifier Produit',
                'حفظ التغييرات': 'Sauvegarder',
                'إلغاء': 'Annuler',
                'التقارير والإحصائيات': 'Rapports et Statistiques',
                'المنتجات حسب الفئة': 'Produits par Catégorie',
                'المنتجات منخفضة المخزون': 'Produits en Rupture',
                'البيانات': 'Données',
                'تصدير البيانات': 'Exporter Données',
                'مسح جميع البيانات': 'Effacer Toutes Données',
                'المبيعات': 'Ventes',
                'نقطة البيع': 'Point de Vente',
                'فاتورة جديدة': 'Nouvelle Facture',
                'فاتورة رقم': 'Facture N°',
                'معلومات العميل': 'Informations Client',
                'اسم العميل': 'Nom Client',
                'رقم الهاتف': 'Téléphone',
                'إضافة منتجات': 'Ajouter Produits',
                'اختر منتج': 'Choisir Produit',
                'المجموع الفرعي:': 'Sous-total:',
                'الضريبة (10%):': 'TVA (10%):',
                'الإجمالي:': 'Total:',
                'حفظ مسودة': 'Sauvegarder',
                'إتمام البيع': 'Finaliser Vente',
                'تاريخ المبيعات': 'Historique Ventes',
                'جميع المبيعات': 'Toutes Ventes',
                'اليوم': 'Aujourd\'hui',
                'هذا الأسبوع': 'Cette Semaine',
                'هذا الشهر': 'Ce Mois',
                'فاتورة': 'Facture',
                'طباعة': 'Imprimer',
                'العودة للمستودع': 'Retour Entrepôt',
                'العودة إلى المستودع': 'Retour à l\'Entrepôt',
                'إنهاء الجولة التجارية وإعداد تقرير شامل': 'Finaliser la tournée commerciale et préparer un rapport complet',
                'ملخص الجولة الحالية': 'Résumé de la Tournée Actuelle',
                'إجمالي المبيعات': 'Total Ventes',
                'إجمالي الإيرادات': 'Revenus Totaux',
                'المنتجات المتبقية': 'Produits Restants',
                'نسبة المبيعات': 'Taux de Vente',
                'تحذير مهم': 'Avertissement Important',
                'العودة إلى المستودع ستؤدي إلى إنشاء تقرير نهائي وإفراغ المخزون بالكامل. هذا الإجراء لا يمكن التراجع عنه.': 'Le retour à l\'entrepôt générera un rapport final et videra complètement l\'inventaire. Cette action est irréversible.',
                'خطوات العودة إلى المستودع': 'Étapes de Retour à l\'Entrepôt',
                'إنشاء التقرير الشامل': 'Génération du Rapport Complet',
                'طباعة وتصدير التقرير': 'Impression et Export du Rapport',
                'إفراغ المخزون': 'Vidage de l\'Inventaire',
                'الاستعداد للجولة الجديدة': 'Préparation pour Nouvelle Tournée',
                'أؤكد أنني أريد العودة إلى المستودع وإنهاء الجولة الحالية': 'Je confirme vouloir retourner à l\'entrepôt et finaliser la tournée actuelle',
                'إنشاء التقرير والعودة': 'Générer Rapport et Retourner',
                'التقرير النهائي للجولة': 'Rapport Final de Tournée',
                'تصدير': 'Exporter',
                'تأكيد إفراغ المخزون': 'Confirmer Vidage Inventaire',
                'FR': 'FR',
                'AR': 'AR'
            }
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateLanguage();
        this.renderInventory();
        this.updateStats();
        this.generateReports();
    }

    setupEventListeners() {
        // Language toggle
        document.getElementById('langToggle').addEventListener('click', () => {
            this.toggleLanguage();
        });

        // Navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                this.switchTab(e.currentTarget.dataset.tab);
            });
        });

        // Add item form
        document.getElementById('addItemForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addItem();
        });

        // Edit item form
        document.getElementById('editItemForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.updateItem();
        });

        // Modal controls
        document.getElementById('closeModal').addEventListener('click', () => {
            this.closeModal();
        });

        document.getElementById('cancelEdit').addEventListener('click', () => {
            this.closeModal();
        });

        // Search
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.searchItems(e.target.value);
        });

        // Sales
        document.getElementById('newSaleBtn').addEventListener('click', () => {
            this.startNewSale();
        });

        document.getElementById('cancelSale').addEventListener('click', () => {
            this.cancelSale();
        });

        document.getElementById('addToSaleBtn').addEventListener('click', () => {
            this.addItemToSale();
        });

        document.getElementById('completeSaleBtn').addEventListener('click', () => {
            this.completeSale();
        });

        document.getElementById('saveDraftBtn').addEventListener('click', () => {
            this.saveDraft();
        });

        document.getElementById('salesFilter').addEventListener('change', (e) => {
            this.filterSales(e.target.value);
        });

        // Invoice modal
        document.getElementById('closeInvoiceModal').addEventListener('click', () => {
            this.closeInvoiceModal();
        });

        document.getElementById('printInvoiceBtn').addEventListener('click', () => {
            this.printInvoice();
        });

        // Warehouse Return
        document.getElementById('confirmReturn').addEventListener('change', (e) => {
            this.toggleReturnConfirmation(e.target.checked);
        });

        document.getElementById('generateReportBtn').addEventListener('click', () => {
            this.generateFinalReport();
        });

        // Final Report Modal
        document.getElementById('closeFinalReportModal').addEventListener('click', () => {
            this.closeFinalReportModal();
        });

        document.getElementById('printFinalReportBtn').addEventListener('click', () => {
            this.printFinalReport();
        });

        document.getElementById('exportFinalReportBtn').addEventListener('click', () => {
            this.exportFinalReport();
        });

        document.getElementById('confirmInventoryResetBtn').addEventListener('click', () => {
            this.confirmInventoryReset();
        });

        // Settings
        document.getElementById('exportBtn').addEventListener('click', () => {
            this.exportData();
        });

        document.getElementById('clearDataBtn').addEventListener('click', () => {
            this.clearAllData();
        });

        // Close modal when clicking outside
        document.getElementById('editModal').addEventListener('click', (e) => {
            if (e.target.id === 'editModal') {
                this.closeModal();
            }
        });
    }

    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'ar' ? 'fr' : 'ar';
        localStorage.setItem('language', this.currentLanguage);
        this.updateLanguage();
    }

    updateLanguage() {
        const html = document.documentElement;
        const body = document.body;
        
        if (this.currentLanguage === 'ar') {
            html.setAttribute('lang', 'ar');
            html.setAttribute('dir', 'rtl');
        } else {
            html.setAttribute('lang', 'fr');
            html.setAttribute('dir', 'ltr');
        }

        // Update all translatable elements
        document.querySelectorAll('[data-ar][data-fr]').forEach(element => {
            const key = element.getAttribute(`data-${this.currentLanguage}`);
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = key;
            } else {
                element.textContent = key;
            }
        });

        // Update title
        document.title = this.currentLanguage === 'ar' ? 'إدارة المخزون' : 'Gestion d\'Inventaire';
    }

    switchTab(tabName) {
        // Update navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // Update content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`${tabName}-tab`).classList.add('active');

        // Refresh content based on tab
        if (tabName === 'reports') {
            this.generateReports();
        } else if (tabName === 'sales') {
            this.populateProductSelect();
            this.renderSalesHistory();
        } else if (tabName === 'warehouse-return') {
            this.updateWarehouseReturnStats();
        }
    }

    addItem() {
        const name = document.getElementById('itemName').value.trim();
        const category = document.getElementById('itemCategory').value;
        const quantity = parseInt(document.getElementById('itemQuantity').value);
        const price = parseFloat(document.getElementById('itemPrice').value);
        const description = document.getElementById('itemDescription').value.trim();

        if (!name || !category || quantity < 0 || price < 0) {
            this.showMessage('يرجى ملء جميع الحقول المطلوبة', 'error');
            return;
        }

        const newItem = {
            id: Date.now(),
            name,
            category,
            quantity,
            price,
            description,
            dateAdded: new Date().toISOString()
        };

        this.inventory.push(newItem);
        this.saveData();
        this.renderInventory();
        this.updateStats();
        this.clearForm();
        this.showMessage('تم إضافة المنتج بنجاح', 'success');
        this.switchTab('inventory');
    }

    editItem(id) {
        const item = this.inventory.find(item => item.id === id);
        if (!item) return;

        this.currentEditId = id;
        
        document.getElementById('editItemName').value = item.name;
        document.getElementById('editItemCategory').value = item.category;
        document.getElementById('editItemQuantity').value = item.quantity;
        document.getElementById('editItemPrice').value = item.price;
        document.getElementById('editItemDescription').value = item.description;

        this.showModal();
    }

    updateItem() {
        const name = document.getElementById('editItemName').value.trim();
        const category = document.getElementById('editItemCategory').value;
        const quantity = parseInt(document.getElementById('editItemQuantity').value);
        const price = parseFloat(document.getElementById('editItemPrice').value);
        const description = document.getElementById('editItemDescription').value.trim();

        if (!name || !category || quantity < 0 || price < 0) {
            this.showMessage('يرجى ملء جميع الحقول المطلوبة', 'error');
            return;
        }

        const itemIndex = this.inventory.findIndex(item => item.id === this.currentEditId);
        if (itemIndex !== -1) {
            this.inventory[itemIndex] = {
                ...this.inventory[itemIndex],
                name,
                category,
                quantity,
                price,
                description
            };

            this.saveData();
            this.renderInventory();
            this.updateStats();
            this.closeModal();
            this.showMessage('تم تحديث المنتج بنجاح', 'success');
        }
    }

    deleteItem(id) {
        if (confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
            this.inventory = this.inventory.filter(item => item.id !== id);
            this.saveData();
            this.renderInventory();
            this.updateStats();
            this.showMessage('تم حذف المنتج بنجاح', 'success');
        }
    }

    renderInventory(items = this.inventory) {
        const container = document.getElementById('inventoryList');
        
        if (items.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-boxes"></i>
                    <h3>${this.currentLanguage === 'ar' ? 'لا توجد منتجات' : 'Aucun produit'}</h3>
                    <p>${this.currentLanguage === 'ar' ? 'ابدأ بإضافة منتجات جديدة' : 'Commencez par ajouter de nouveaux produits'}</p>
                </div>
            `;
            return;
        }

        container.innerHTML = items.map(item => `
            <div class="inventory-item">
                <div class="item-header">
                    <div>
                        <div class="item-name">${item.name}</div>
                        <span class="item-category">${this.getCategoryName(item.category)}</span>
                    </div>
                    <div class="item-actions">
                        <button class="btn-icon edit" onclick="app.editItem(${item.id})" title="${this.currentLanguage === 'ar' ? 'تعديل' : 'Modifier'}">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-icon delete" onclick="app.deleteItem(${item.id})" title="${this.currentLanguage === 'ar' ? 'حذف' : 'Supprimer'}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="item-details">
                    <div class="item-detail">
                        <div class="item-detail-label">${this.currentLanguage === 'ar' ? 'الكمية' : 'Quantité'}</div>
                        <div class="item-detail-value">
                            <span class="quantity-badge ${item.quantity <= 5 ? 'low' : ''}">${item.quantity}</span>
                        </div>
                    </div>
                    <div class="item-detail">
                        <div class="item-detail-label">${this.currentLanguage === 'ar' ? 'السعر' : 'Prix'}</div>
                        <div class="item-detail-value">$${item.price.toFixed(2)}</div>
                    </div>
                    <div class="item-detail">
                        <div class="item-detail-label">${this.currentLanguage === 'ar' ? 'الإجمالي' : 'Total'}</div>
                        <div class="item-detail-value">$${(item.quantity * item.price).toFixed(2)}</div>
                    </div>
                </div>
                ${item.description ? `<div class="item-description">${item.description}</div>` : ''}
            </div>
        `).join('');
    }

    getCategoryName(category) {
        const categoryNames = {
            electronics: this.currentLanguage === 'ar' ? 'إلكترونيات' : 'Électronique',
            clothing: this.currentLanguage === 'ar' ? 'ملابس' : 'Vêtements',
            food: this.currentLanguage === 'ar' ? 'طعام' : 'Nourriture',
            books: this.currentLanguage === 'ar' ? 'كتب' : 'Livres',
            other: this.currentLanguage === 'ar' ? 'أخرى' : 'Autre'
        };
        return categoryNames[category] || category;
    }

    updateStats() {
        const totalItems = this.inventory.reduce((sum, item) => sum + item.quantity, 0);
        const totalValue = this.inventory.reduce((sum, item) => sum + (item.quantity * item.price), 0);

        document.getElementById('totalItems').textContent = totalItems;
        document.getElementById('totalValue').textContent = `$${totalValue.toFixed(2)}`;
    }

    searchItems(query) {
        if (!query.trim()) {
            this.renderInventory();
            return;
        }

        const filteredItems = this.inventory.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        );

        this.renderInventory(filteredItems);
    }

    generateReports() {
        this.generateCategoryChart();
        this.generateLowStockReport();
    }

    generateCategoryChart() {
        const categoryStats = {};
        this.inventory.forEach(item => {
            categoryStats[item.category] = (categoryStats[item.category] || 0) + item.quantity;
        });

        const chartContainer = document.getElementById('categoryChart');
        if (Object.keys(categoryStats).length === 0) {
            chartContainer.innerHTML = `<p>${this.currentLanguage === 'ar' ? 'لا توجد بيانات لعرضها' : 'Aucune donnée à afficher'}</p>`;
            return;
        }

        const chartHTML = Object.entries(categoryStats).map(([category, count]) => {
            const percentage = (count / this.inventory.reduce((sum, item) => sum + item.quantity, 0)) * 100;
            return `
                <div style="margin-bottom: 10px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span>${this.getCategoryName(category)}</span>
                        <span>${count} (${percentage.toFixed(1)}%)</span>
                    </div>
                    <div style="background: #e2e8f0; height: 8px; border-radius: 4px;">
                        <div style="background: #4f46e5; height: 100%; width: ${percentage}%; border-radius: 4px;"></div>
                    </div>
                </div>
            `;
        }).join('');

        chartContainer.innerHTML = chartHTML;
    }

    generateLowStockReport() {
        const lowStockItems = this.inventory.filter(item => item.quantity <= 5);
        const container = document.getElementById('lowStockItems');

        if (lowStockItems.length === 0) {
            container.innerHTML = `<p style="color: #10b981;">${this.currentLanguage === 'ar' ? 'جميع المنتجات متوفرة بكميات كافية' : 'Tous les produits sont bien approvisionnés'}</p>`;
            return;
        }

        container.innerHTML = lowStockItems.map(item => `
            <div class="low-stock-item">
                <div>
                    <strong>${item.name}</strong>
                    <br>
                    <small>${this.getCategoryName(item.category)}</small>
                </div>
                <span class="quantity-badge low">${item.quantity}</span>
            </div>
        `).join('');
    }

    showModal() {
        document.getElementById('editModal').classList.add('active');
    }

    closeModal() {
        document.getElementById('editModal').classList.remove('active');
        this.currentEditId = null;
    }

    clearForm() {
        document.getElementById('addItemForm').reset();
    }

    showMessage(message, type) {
        // Create message element
        const messageEl = document.createElement('div');
        messageEl.className = `message ${type}`;
        messageEl.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        `;

        // Insert at top of main content
        const mainContent = document.querySelector('.main-content');
        mainContent.insertBefore(messageEl, mainContent.firstChild);

        // Remove after 3 seconds
        setTimeout(() => {
            messageEl.remove();
        }, 3000);
    }

    exportData() {
        const dataStr = JSON.stringify(this.inventory, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `inventory-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        URL.revokeObjectURL(url);
        this.showMessage(this.currentLanguage === 'ar' ? 'تم تصدير البيانات بنجاح' : 'Données exportées avec succès', 'success');
    }

    clearAllData() {
        const confirmMessage = this.currentLanguage === 'ar' 
            ? 'هل أنت متأكد من حذف جميع البيانات؟ هذا الإجراء لا يمكن التراجع عنه.'
            : 'Êtes-vous sûr de vouloir supprimer toutes les données ? Cette action ne peut pas être annulée.';
            
        if (confirm(confirmMessage)) {
            this.inventory = [];
            this.saveData();
            this.renderInventory();
            this.updateStats();
            this.generateReports();
            this.showMessage(this.currentLanguage === 'ar' ? 'تم حذف جميع البيانات' : 'Toutes les données ont été supprimées', 'success');
        }
    }

    generateInvoiceNumber() {
        const lastInvoice = this.sales.length > 0 ? this.sales[this.sales.length - 1] : null;
        const lastNumber = lastInvoice ? parseInt(lastInvoice.invoiceNumber.replace('#', '')) : 0;
        return `#${String(lastNumber + 1).padStart(3, '0')}`;
    }

    startNewSale() {
        this.currentSale = {
            items: [],
            customer: { name: '', phone: '' },
            invoiceNumber: this.generateInvoiceNumber(),
            date: new Date().toISOString()
        };
        
        document.getElementById('invoiceNumber').textContent = this.currentSale.invoiceNumber;
        document.getElementById('customerName').value = '';
        document.getElementById('customerPhone').value = '';
        document.getElementById('saleProductSelect').value = '';
        document.getElementById('saleQuantity').value = '';
        
        document.getElementById('currentSale').style.display = 'block';
        this.updateSaleDisplay();
        this.populateProductSelect();
    }

    cancelSale() {
        if (this.currentSale.items.length > 0) {
            if (!confirm(this.currentLanguage === 'ar' ? 'هل تريد إلغاء البيع الحالي؟' : 'Voulez-vous annuler la vente actuelle?')) {
                return;
            }
        }
        document.getElementById('currentSale').style.display = 'none';
        this.currentSale = { items: [], customer: { name: '', phone: '' }, invoiceNumber: '', date: '' };
    }

    populateProductSelect() {
        const select = document.getElementById('saleProductSelect');
        const availableItems = this.inventory.filter(item => item.quantity > 0);
        
        select.innerHTML = `<option value="">${this.currentLanguage === 'ar' ? 'اختر منتج' : 'Choisir Produit'}</option>`;
        
        availableItems.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = `${item.name} (${item.quantity} ${this.currentLanguage === 'ar' ? 'متوفر' : 'disponible'})`;
            select.appendChild(option);
        });
    }

    addItemToSale() {
        const productId = parseInt(document.getElementById('saleProductSelect').value);
        const quantity = parseInt(document.getElementById('saleQuantity').value);
        
        if (!productId || !quantity || quantity <= 0) {
            this.showMessage(this.currentLanguage === 'ar' ? 'يرجى اختيار منتج وكمية صحيحة' : 'Veuillez choisir un produit et une quantité valide', 'error');
            return;
        }
        
        const product = this.inventory.find(item => item.id === productId);
        if (!product) {
            this.showMessage(this.currentLanguage === 'ar' ? 'المنتج غير موجود' : 'Produit non trouvé', 'error');
            return;
        }
        
        if (quantity > product.quantity) {
            this.showMessage(this.currentLanguage === 'ar' ? 'الكمية المطلوبة أكبر من المتوفر' : 'Quantité demandée supérieure au stock', 'error');
            return;
        }
        
        // Check if item already exists in sale
        const existingItem = this.currentSale.items.find(item => item.productId === productId);
        if (existingItem) {
            if (existingItem.quantity + quantity > product.quantity) {
                this.showMessage(this.currentLanguage === 'ar' ? 'الكمية الإجمالية تتجاوز المتوفر' : 'Quantité totale dépasse le stock', 'error');
                return;
            }
            existingItem.quantity += quantity;
            existingItem.total = existingItem.quantity * existingItem.price;
        } else {
            this.currentSale.items.push({
                productId: productId,
                name: product.name,
                price: product.price,
                quantity: quantity,
                total: product.price * quantity
            });
        }
        
        document.getElementById('saleProductSelect').value = '';
        document.getElementById('saleQuantity').value = '';
        this.updateSaleDisplay();
    }

    removeItemFromSale(productId) {
        this.currentSale.items = this.currentSale.items.filter(item => item.productId !== productId);
        this.updateSaleDisplay();
    }

    updateSaleDisplay() {
        const container = document.getElementById('saleItems');
        
        if (this.currentSale.items.length === 0) {
            container.innerHTML = `<p style="text-align: center; color: #64748b; padding: 2rem;">${this.currentLanguage === 'ar' ? 'لم يتم إضافة منتجات بعد' : 'Aucun produit ajouté'}</p>`;
        } else {
            container.innerHTML = this.currentSale.items.map(item => `
                <div class="sale-item">
                    <div class="sale-item-info">
                        <div class="sale-item-name">${item.name}</div>
                        <div class="sale-item-details">${item.quantity} × $${item.price.toFixed(2)}</div>
                    </div>
                    <div class="sale-item-total">$${item.total.toFixed(2)}</div>
                    <button class="remove-item-btn" onclick="app.removeItemFromSale(${item.productId})">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `).join('');
        }
        
        this.updateSaleTotals();
    }

    updateSaleTotals() {
        const subtotal = this.currentSale.items.reduce((sum, item) => sum + item.total, 0);
        const tax = subtotal * this.taxRate;
        const total = subtotal + tax;
        
        document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('taxAmount').textContent = `$${tax.toFixed(2)}`;
        document.getElementById('finalTotal').textContent = `$${total.toFixed(2)}`;
    }

    completeSale() {
        if (this.currentSale.items.length === 0) {
            this.showMessage(this.currentLanguage === 'ar' ? 'يرجى إضافة منتجات للبيع' : 'Veuillez ajouter des produits à la vente', 'error');
            return;
        }
        
        // Get customer info
        this.currentSale.customer.name = document.getElementById('customerName').value.trim();
        this.currentSale.customer.phone = document.getElementById('customerPhone').value.trim();
        
        // Calculate totals
        const subtotal = this.currentSale.items.reduce((sum, item) => sum + item.total, 0);
        const tax = subtotal * this.taxRate;
        const total = subtotal + tax;
        
        // Create sale record
        const sale = {
            id: Date.now(),
            invoiceNumber: this.currentSale.invoiceNumber,
            date: this.currentSale.date,
            customer: { ...this.currentSale.customer },
            items: [...this.currentSale.items],
            subtotal: subtotal,
            tax: tax,
            total: total,
            status: 'completed'
        };
        
        // Update inventory
        this.currentSale.items.forEach(saleItem => {
            const inventoryItem = this.inventory.find(item => item.id === saleItem.productId);
            if (inventoryItem) {
                inventoryItem.quantity -= saleItem.quantity;
            }
        });
        
        // Save sale
        this.sales.push(sale);
        this.saveData();
        
        // Show invoice
        this.showInvoice(sale);
        
        // Reset current sale
        document.getElementById('currentSale').style.display = 'none';
        this.currentSale = { items: [], customer: { name: '', phone: '' }, invoiceNumber: '', date: '' };
        
        // Update displays
        this.renderInventory();
        this.updateStats();
        this.renderSalesHistory();
        
        this.showMessage(this.currentLanguage === 'ar' ? 'تم إتمام البيع بنجاح' : 'Vente finalisée avec succès', 'success');
    }

    saveDraft() {
        // For now, just show a message. Could implement draft saving later
        this.showMessage(this.currentLanguage === 'ar' ? 'تم حفظ المسودة' : 'Brouillon sauvegardé', 'success');
    }

    renderSalesHistory(filter = 'all') {
        const container = document.getElementById('salesList');
        let filteredSales = [...this.sales];
        
        // Apply filter
        const now = new Date();
        switch (filter) {
            case 'today':
                filteredSales = this.sales.filter(sale => {
                    const saleDate = new Date(sale.date);
                    return saleDate.toDateString() === now.toDateString();
                });
                break;
            case 'week':
                const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                filteredSales = this.sales.filter(sale => new Date(sale.date) >= weekAgo);
                break;
            case 'month':
                const monthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
                filteredSales = this.sales.filter(sale => new Date(sale.date) >= monthAgo);
                break;
        }
        
        if (filteredSales.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-receipt"></i>
                    <h3>${this.currentLanguage === 'ar' ? 'لا توجد مبيعات' : 'Aucune vente'}</h3>
                    <p>${this.currentLanguage === 'ar' ? 'ابدأ ببيع منتجاتك' : 'Commencez à vendre vos produits'}</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = filteredSales.reverse().map(sale => {
            const saleDate = new Date(sale.date).toLocaleDateString(this.currentLanguage === 'ar' ? 'ar-SA' : 'fr-FR');
            return `
                <div class="sale-history-item">
                    <div class="sale-history-header">
                        <span class="sale-invoice-number">${sale.invoiceNumber}</span>
                        <span class="sale-date">${saleDate}</span>
                    </div>
                    ${sale.customer.name ? `<div class="sale-customer">${this.currentLanguage === 'ar' ? 'العميل:' : 'Client:'} ${sale.customer.name}</div>` : ''}
                    <div class="sale-summary">
                        <span class="sale-items-count">${sale.items.length} ${this.currentLanguage === 'ar' ? 'منتج' : 'produit(s)'}</span>
                        <div>
                            <span class="sale-total-amount">$${sale.total.toFixed(2)}</span>
                            <button class="view-invoice-btn" onclick="app.showInvoice(${JSON.stringify(sale).replace(/"/g, '&quot;')})">
                                ${this.currentLanguage === 'ar' ? 'عرض الفاتورة' : 'Voir Facture'}
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    filterSales(filter) {
        this.renderSalesHistory(filter);
    }

    showInvoice(sale) {
        const modal = document.getElementById('invoiceModal');
        const content = document.getElementById('invoiceContent');
        
        const invoiceHTML = this.generateInvoiceHTML(sale);
        content.innerHTML = invoiceHTML;
        
        modal.classList.add('active');
    }

    generateInvoiceHTML(sale) {
        const saleDate = new Date(sale.date).toLocaleDateString(this.currentLanguage === 'ar' ? 'ar-SA' : 'fr-FR');
        const isArabic = this.currentLanguage === 'ar';
        
        return `
            <div class="invoice-header">
                <div class="invoice-title">${isArabic ? 'فاتورة بيع' : 'FACTURE DE VENTE'}</div>
                <div>${isArabic ? 'رقم الفاتورة:' : 'N° Facture:'} ${sale.invoiceNumber}</div>
                <div>${isArabic ? 'التاريخ:' : 'Date:'} ${saleDate}</div>
            </div>
            
            <div class="invoice-info">
                <div class="invoice-section">
                    <h4>${isArabic ? 'بيانات الشركة' : 'Informations Entreprise'}</h4>
                    <div>${isArabic ? 'شركة إدارة المخزون' : 'Société Gestion Inventaire'}</div>
                    <div>${isArabic ? 'العنوان: شارع التجارة 123' : 'Adresse: 123 Rue Commerce'}</div>
                    <div>${isArabic ? 'الهاتف: +123 456 789' : 'Tél: +123 456 789'}</div>
                </div>
                
                <div class="invoice-section">
                    <h4>${isArabic ? 'بيانات العميل' : 'Informations Client'}</h4>
                    <div>${sale.customer.name || (isArabic ? 'عميل نقدي' : 'Client Cash')}</div>
                    ${sale.customer.phone ? `<div>${isArabic ? 'الهاتف:' : 'Tél:'} ${sale.customer.phone}</div>` : ''}
                </div>
            </div>
            
            <table class="invoice-table">
                <thead>
                    <tr>
                        <th>${isArabic ? 'المنتج' : 'Produit'}</th>
                        <th>${isArabic ? 'الكمية' : 'Qté'}</th>
                        <th>${isArabic ? 'السعر' : 'Prix'}</th>
                        <th>${isArabic ? 'الإجمالي' : 'Total'}</th>
                    </tr>
                </thead>
                <tbody>
                    ${sale.items.map(item => `
                        <tr>
                            <td>${item.name}</td>
                            <td>${item.quantity}</td>
                            <td>$${item.price.toFixed(2)}</td>
                            <td>$${item.total.toFixed(2)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            
            <div class="invoice-totals">
                <div class="invoice-total-row">
                    <span>${isArabic ? 'المجموع الفرعي:' : 'Sous-total:'}</span>
                    <span>$${sale.subtotal.toFixed(2)}</span>
                </div>
                <div class="invoice-total-row">
                    <span>${isArabic ? 'الضريبة (10%):' : 'TVA (10%):'}</span>
                    <span>$${sale.tax.toFixed(2)}</span>
                </div>
                <div class="invoice-total-row invoice-final-total">
                    <span>${isArabic ? 'الإجمالي:' : 'TOTAL:'}</span>
                    <span>$${sale.total.toFixed(2)}</span>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 2rem; font-size: 0.9rem; color: #666;">
                ${isArabic ? 'شكراً لتعاملكم معنا' : 'Merci pour votre confiance'}
            </div>
        `;
    }

    closeInvoiceModal() {
        document.getElementById('invoiceModal').classList.remove('active');
    }

    printInvoice() {
        window.print();
    }

    toggleReturnConfirmation(checked) {
        const generateBtn = document.getElementById('generateReportBtn');
        generateBtn.disabled = !checked;
    }

    updateWarehouseReturnStats() {
        const totalSales = this.sales.length;
        const totalRevenue = this.sales.reduce((sum, sale) => sum + sale.total, 0);
        const remainingItems = this.inventory.reduce((sum, item) => sum + item.quantity, 0);
        const initialItems = this.inventory.reduce((sum, item) => sum + item.quantity, 0) + 
                            this.sales.reduce((sum, sale) => sum + sale.items.reduce((itemSum, item) => itemSum + item.quantity, 0), 0);
        const salesPercentage = initialItems > 0 ? Math.round((this.sales.reduce((sum, sale) => sum + sale.items.reduce((itemSum, item) => itemSum + item.quantity, 0), 0) / initialItems) * 100) : 0;

        document.getElementById('totalSalesCount').textContent = totalSales;
        document.getElementById('totalRevenue').textContent = `$${totalRevenue.toFixed(2)}`;
        document.getElementById('remainingItems').textContent = remainingItems;
        document.getElementById('salesPercentage').textContent = `${salesPercentage}%`;
    }

    generateFinalReport() {
        const reportData = this.compileFinalReportData();
        const reportHTML = this.generateFinalReportHTML(reportData);
        
        document.getElementById('finalReportContent').innerHTML = reportHTML;
        document.getElementById('finalReportModal').classList.add('active');
    }

    compileFinalReportData() {
        const now = new Date();
        const totalSales = this.sales.length;
        const totalRevenue = this.sales.reduce((sum, sale) => sum + sale.total, 0);
        const totalTax = this.sales.reduce((sum, sale) => sum + sale.tax, 0);
        const totalSubtotal = this.sales.reduce((sum, sale) => sum + sale.subtotal, 0);
        
        // Calculate items sold by category
        const categoryStats = {};
        this.sales.forEach(sale => {
            sale.items.forEach(item => {
                const product = this.inventory.find(p => p.id === item.productId) || 
                               this.getProductFromSales(item.productId);
                if (product) {
                    const category = product.category || 'other';
                    if (!categoryStats[category]) {
                        categoryStats[category] = { quantity: 0, revenue: 0 };
                    }
                    categoryStats[category].quantity += item.quantity;
                    categoryStats[category].revenue += item.total;
                }
            });
        });

        // Top selling products
        const productStats = {};
        this.sales.forEach(sale => {
            sale.items.forEach(item => {
                if (!productStats[item.productId]) {
                    productStats[item.productId] = {
                        name: item.name,
                        quantity: 0,
                        revenue: 0
                    };
                }
                productStats[item.productId].quantity += item.quantity;
                productStats[item.productId].revenue += item.total;
            });
        });

        const topProducts = Object.values(productStats)
            .sort((a, b) => b.revenue - a.revenue)
            .slice(0, 10);

        // Remaining inventory
        const remainingInventory = this.inventory.filter(item => item.quantity > 0);
        const remainingValue = remainingInventory.reduce((sum, item) => sum + (item.quantity * item.price), 0);

        return {
            reportDate: now,
            totalSales,
            totalRevenue,
            totalTax,
            totalSubtotal,
            categoryStats,
            topProducts,
            remainingInventory,
            remainingValue,
            salesList: this.sales
        };
    }

    getProductFromSales(productId) {
        // Helper function to get product info from sales data if not in current inventory
        for (const sale of this.sales) {
            const item = sale.items.find(item => item.productId === productId);
            if (item) {
                return { name: item.name, category: 'other' };
            }
        }
        return null;
    }

    generateFinalReportHTML(data) {
        const isArabic = this.currentLanguage === 'ar';
        const reportDate = data.reportDate.toLocaleDateString(isArabic ? 'ar-SA' : 'fr-FR');
        const reportTime = data.reportDate.toLocaleTimeString(isArabic ? 'ar-SA' : 'fr-FR');

        return `
            <div class="report-header">
                <div class="report-title">${isArabic ? 'التقرير النهائي للجولة التجارية' : 'RAPPORT FINAL DE TOURNÉE COMMERCIALE'}</div>
                <div>${isArabic ? 'التاريخ:' : 'Date:'} ${reportDate}</div>
                <div>${isArabic ? 'الوقت:' : 'Heure:'} ${reportTime}</div>
            </div>

            <div class="report-section">
                <h3>${isArabic ? 'ملخص المبيعات' : 'Résumé des Ventes'}</h3>
                <div class="report-summary">
                    <div class="summary-row">
                        <span>${isArabic ? 'عدد المبيعات:' : 'Nombre de ventes:'}</span>
                        <span>${data.totalSales}</span>
                    </div>
                    <div class="summary-row">
                        <span>${isArabic ? 'المجموع الفرعي:' : 'Sous-total:'}</span>
                        <span>$${data.totalSubtotal.toFixed(2)}</span>
                    </div>
                    <div class="summary-row">
                        <span>${isArabic ? 'الضرائب:' : 'Taxes:'}</span>
                        <span>$${data.totalTax.toFixed(2)}</span>
                    </div>
                    <div class="summary-row summary-total">
                        <span>${isArabic ? 'إجمالي الإيرادات:' : 'REVENUS TOTAUX:'}</span>
                        <span>$${data.totalRevenue.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <div class="report-section">
                <h3>${isArabic ? 'المبيعات حسب الفئة' : 'Ventes par Catégorie'}</h3>
                <table class="report-table">
                    <thead>
                        <tr>
                            <th>${isArabic ? 'الفئة' : 'Catégorie'}</th>
                            <th>${isArabic ? 'الكمية المباعة' : 'Quantité Vendue'}</th>
                            <th>${isArabic ? 'الإيرادات' : 'Revenus'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${Object.entries(data.categoryStats).map(([category, stats]) => `
                            <tr>
                                <td>${this.getCategoryName(category)}</td>
                                <td>${stats.quantity}</td>
                                <td>$${stats.revenue.toFixed(2)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>

            <div class="report-section">
                <h3>${isArabic ? 'أفضل المنتجات مبيعاً' : 'Produits les Plus Vendus'}</h3>
                <table class="report-table">
                    <thead>
                        <tr>
                            <th>${isArabic ? 'المنتج' : 'Produit'}</th>
                            <th>${isArabic ? 'الكمية' : 'Quantité'}</th>
                            <th>${isArabic ? 'الإيرادات' : 'Revenus'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.topProducts.map(product => `
                            <tr>
                                <td>${product.name}</td>
                                <td>${product.quantity}</td>
                                <td>$${product.revenue.toFixed(2)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>

            <div class="report-section">
                <h3>${isArabic ? 'المخزون المتبقي' : 'Inventaire Restant'}</h3>
                <div class="report-summary">
                    <div class="summary-row">
                        <span>${isArabic ? 'عدد المنتجات المتبقية:' : 'Nombre de produits restants:'}</span>
                        <span>${data.remainingInventory.length}</span>
                    </div>
                    <div class="summary-row">
                        <span>${isArabic ? 'قيمة المخزون المتبقي:' : 'Valeur inventaire restant:'}</span>
                        <span>$${data.remainingValue.toFixed(2)}</span>
                    </div>
                </div>
                ${data.remainingInventory.length > 0 ? `
                    <table class="report-table">
                        <thead>
                            <tr>
                                <th>${isArabic ? 'المنتج' : 'Produit'}</th>
                                <th>${isArabic ? 'الفئة' : 'Catégorie'}</th>
                                <th>${isArabic ? 'الكمية' : 'Quantité'}</th>
                                <th>${isArabic ? 'السعر' : 'Prix'}</th>
                                <th>${isArabic ? 'القيمة' : 'Valeur'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.remainingInventory.map(item => `
                                <tr>
                                    <td>${item.name}</td>
                                    <td>${this.getCategoryName(item.category)}</td>
                                    <td>${item.quantity}</td>
                                    <td>$${item.price.toFixed(2)}</td>
                                    <td>$${(item.quantity * item.price).toFixed(2)}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                ` : `<p style="text-align: center; color: #10b981; font-weight: 600;">${isArabic ? 'تم بيع جميع المنتجات!' : 'Tous les produits ont été vendus!'}</p>`}
            </div>

            <div class="report-section">
                <h3>${isArabic ? 'تفاصيل جميع المبيعات' : 'Détails de Toutes les Ventes'}</h3>
                <table class="report-table">
                    <thead>
                        <tr>
                            <th>${isArabic ? 'رقم الفاتورة' : 'N° Facture'}</th>
                            <th>${isArabic ? 'التاريخ' : 'Date'}</th>
                            <th>${isArabic ? 'العميل' : 'Client'}</th>
                            <th>${isArabic ? 'المبلغ' : 'Montant'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.salesList.map(sale => `
                            <tr>
                                <td>${sale.invoiceNumber}</td>
                                <td>${new Date(sale.date).toLocaleDateString(isArabic ? 'ar-SA' : 'fr-FR')}</td>
                                <td>${sale.customer.name || (isArabic ? 'عميل نقدي' : 'Client Cash')}</td>
                                <td>$${sale.total.toFixed(2)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>

            <div style="text-align: center; margin-top: 2rem; padding-top: 1rem; border-top: 2px solid #333;">
                <p style="font-weight: bold;">${isArabic ? 'انتهى التقرير - جاهز للعودة إلى المستودع' : 'Fin du rapport - Prêt pour retour à l\'entrepôt'}</p>
            </div>
        `;
    }

    closeFinalReportModal() {
        document.getElementById('finalReportModal').classList.remove('active');
    }

    printFinalReport() {
        window.print();
    }

    exportFinalReport() {
        const reportData = this.compileFinalReportData();
        const reportContent = {
            reportDate: reportData.reportDate.toISOString(),
            summary: {
                totalSales: reportData.totalSales,
                totalRevenue: reportData.totalRevenue,
                totalTax: reportData.totalTax,
                totalSubtotal: reportData.totalSubtotal
            },
            categoryStats: reportData.categoryStats,
            topProducts: reportData.topProducts,
            remainingInventory: reportData.remainingInventory,
            remainingValue: reportData.remainingValue,
            salesDetails: reportData.salesList
        };

        const dataStr = JSON.stringify(reportContent, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `final-report-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        URL.revokeObjectURL(url);
        this.showMessage(this.currentLanguage === 'ar' ? 'تم تصدير التقرير النهائي بنجاح' : 'Rapport final exporté avec succès', 'success');
    }

    confirmInventoryReset() {
        const confirmMessage = this.currentLanguage === 'ar' 
            ? 'هل أنت متأكد من إفراغ المخزون بالكامل؟ سيتم حذف جميع المنتجات المتبقية نهائياً.'
            : 'Êtes-vous sûr de vouloir vider complètement l\'inventaire ? Tous les produits restants seront définitivement supprimés.';
            
        if (confirm(confirmMessage)) {
            // Clear all inventory
            this.inventory = [];
            
            // Archive current sales data with timestamp
            const archiveData = {
                timestamp: new Date().toISOString(),
                sales: [...this.sales],
                totalRevenue: this.sales.reduce((sum, sale) => sum + sale.total, 0)
            };
            
            // Save archive
            const archives = JSON.parse(localStorage.getItem('salesArchives')) || [];
            archives.push(archiveData);
            localStorage.setItem('salesArchives', JSON.stringify(archives));
            
            // Clear current sales
            this.sales = [];
            
            // Reset confirmation checkbox
            document.getElementById('confirmReturn').checked = false;
            this.toggleReturnConfirmation(false);
            
            // Save data and update displays
            this.saveData();
            this.renderInventory();
            this.updateStats();
            this.renderSalesHistory();
            this.updateWarehouseReturnStats();
            
            // Close modal and switch to inventory tab
            this.closeFinalReportModal();
            this.switchTab('inventory');
            
            this.showMessage(
                this.currentLanguage === 'ar' 
                    ? 'تم إفراغ المخزون بنجاح. النظام جاهز لجولة جديدة!'
                    : 'Inventaire vidé avec succès. Le système est prêt pour une nouvelle tournée !', 
                'success'
            );
        }
    }

    saveData() {
        localStorage.setItem('inventory', JSON.stringify(this.inventory));
        localStorage.setItem('sales', JSON.stringify(this.sales));
    }
}

// Initialize the app
const app = new InventoryApp();

// Add some sample data if inventory is empty
if (app.inventory.length === 0) {
    const sampleData = [
        {
            id: 1,
            name: 'iPhone 14',
            category: 'electronics',
            quantity: 15,
            price: 999.99,
            description: 'Latest iPhone model with advanced features',
            dateAdded: new Date().toISOString()
        },
        {
            id: 2,
            name: 'T-Shirt Cotton',
            category: 'clothing',
            quantity: 3,
            price: 29.99,
            description: '100% cotton comfortable t-shirt',
            dateAdded: new Date().toISOString()
        },
        {
            id: 3,
            name: 'JavaScript Guide',
            category: 'books',
            quantity: 8,
            price: 45.50,
            description: 'Complete guide to JavaScript programming',
            dateAdded: new Date().toISOString()
        }
    ];
    
    app.inventory = sampleData;
    app.saveData();
    app.renderInventory();
    app.updateStats();
    app.generateReports();
}
