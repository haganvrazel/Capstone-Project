import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Item } from '../Item';
import { ElectronicService1 } from '../ElectronicService1';

@Component({
	templateUrl: 'cart.component.html'
})

export class CartComponent implements OnInit {

	items: Item[] = [];
	total: number = 0;

	constructor(
		private activatedRoute: ActivatedRoute,
		private electronicService: ElectronicService1
	) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
			var id = params['id'];
			if (id) {
				var item: Item= {
          electronic: this.electronicService.find(id),
					quantity: 1
				};

				if (localStorage.getItem('cart') == null) {
					let cart: any = [];
					cart.push(JSON.stringify(item));
					localStorage.setItem('cart', JSON.stringify(cart));
				} else {
					let cart: any = JSON.parse(localStorage.getItem('cart'));
					let index: number = -1;
					for (var i = 0; i < cart.length; i++) {
						let item: Item = JSON.parse(cart[i]);
						if (item.electronic._id == id) {
							index = i;
							break;
						}
					}
					if (index == -1) {
						cart.push(JSON.stringify(item));
						localStorage.setItem('cart', JSON.stringify(cart));
					} else {
						let item: Item = JSON.parse(cart[index]);
						item.quantity += 1;
						cart[index] = JSON.stringify(item);
						localStorage.setItem("cart", JSON.stringify(cart));
					}
				}
				this.loadCart();
			} else {
				this.loadCart();
			}
		});
	}

	loadCart(): void {
		this.total = 0;
		this.items = [];
		let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
				electronic: item.electronic,
				quantity: item.quantity
			});
			this.total += item.electronic.price * item.quantity;
		}
	}

	remove(id: string): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		let index: number = -1;
		for (var i = 0; i < cart.length; i++) {
			let item: Item = JSON.parse(cart[i]);
			if (item.electronic._id == id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
  }
  
	cartInfo:any;
	checkOut() {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		this.cartInfo= cart;
		console.log(cart);
	}

}